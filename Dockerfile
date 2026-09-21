# Birthday gallery — production image for Render Free (Docker).
# Multi-stage: Composer deps -> Vite assets -> Apache + PHP 8.3 runtime.
# No secrets are baked in. Runtime config comes from Render environment variables.

# ---------- Stage 1: PHP dependencies ----------
FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-scripts \
    --no-autoloader \
    --prefer-dist \
    --no-interaction
COPY . .
RUN composer dump-autoload --optimize --no-dev --classmap-authoritative

# ---------- Stage 2: frontend assets ----------
FROM node:22 AS frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- Stage 3: runtime ----------
FROM php:8.3-apache

# System deps + PHP extensions (SQLite included) + Apache rewrite.
RUN apt-get update \
    && apt-get install -y --no-install-recommends libsqlite3-dev unzip \
    && docker-php-ext-install pdo pdo_sqlite \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists

# Serve Laravel from /public and allow .htaccess rewrites.
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && printf '<Directory /var/www/html/public>\n\tAllowOverride All\n</Directory>\n' \
        > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

WORKDIR /var/www/html
COPY --from=vendor /app/vendor ./vendor
COPY . .
COPY --from=frontend /app/public/build ./public/build

# Writable paths for the web user; SQLite file location.
RUN mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache \
        storage/logs bootstrap/cache database \
    && chown -R www-data:www-data storage bootstrap/cache database \
    && chmod -R 775 storage bootstrap/cache

# Startup: bind Render's $PORT, ensure SQLite file, migrate, then serve.
RUN printf '%s\n' \
    '#!/bin/sh' \
    'set -e' \
    'PORT=${PORT:-80}' \
    'sed -i "s/Listen 80/Listen $PORT/" /etc/apache2/ports.conf' \
    'sed -i "s/:80>/:$PORT>/" /etc/apache2/sites-available/000-default.conf' \
    'if [ -n "$RENDER_EXTERNAL_URL" ] && [ -z "$APP_URL" ]; then' \
    '  export APP_URL="$RENDER_EXTERNAL_URL"' \
    'fi' \
    'touch database/database.sqlite' \
    'chown www-data:www-data database/database.sqlite' \
    'php artisan package:discover --ansi' \
    'php artisan migrate --force' \
    'php artisan config:cache' \
    'php artisan view:cache' \
    'exec apache2-foreground' \
    > /usr/local/bin/start.sh \
    && chmod +x /usr/local/bin/start.sh

CMD ["start.sh"]
