import { cpSync, existsSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Static-host build for the birthday page. No Laravel/Inertia runtime:
// plain React + Tailwind + the existing birthday sections and styles.
// Public birthday media is copied into dist; the Laravel public/
// directory itself is NOT used as publicDir to keep dist clean.
// The template is renamed to dist/index.html after bundling.
function birthdayStaticPost() {
    return {
        name: 'birthday-static-post',
        apply: 'build' as const,
        closeBundle() {
            const projectRoot = import.meta.dirname;
            const outDir = resolve(projectRoot, 'dist');

            for (const dir of ['images', 'audio']) {
                const from = resolve(projectRoot, 'public', dir);
                if (existsSync(from)) {
                    cpSync(from, resolve(outDir, dir), { recursive: true });
                }
            }

            const templateOutput = resolve(outDir, 'birthday-static.html');
            if (existsSync(templateOutput)) {
                renameSync(templateOutput, resolve(outDir, 'index.html'));
            }
        },
    };
}

export default defineConfig({
    base: '/Birthday-gallery/',
    publicDir: false,
    plugins: [react(), tailwindcss(), birthdayStaticPost()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: resolve(import.meta.dirname, 'birthday-static.html'),
            },
        },
    },
});
