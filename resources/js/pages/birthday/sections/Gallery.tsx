import type { CSSProperties } from 'react';
import { galleryItems } from '../data/content';

const LAYOUT_BY_INDEX = [
    { item: 'birthday-gallery-item--large', canvas: 'birthday-gallery-canvas--4-3' },
    { item: 'birthday-gallery-item--small-offset', canvas: 'birthday-gallery-canvas--3-4' },
    { item: 'birthday-gallery-item--medium', canvas: 'birthday-gallery-canvas--square' },
    { item: 'birthday-gallery-item--medium-wide', canvas: 'birthday-gallery-canvas--4-3' },
    { item: 'birthday-gallery-item--small-tall', canvas: 'birthday-gallery-canvas--3-4' },
    { item: 'birthday-gallery-item--wide-closing', canvas: 'birthday-gallery-canvas--16-10' },
] as const;

function RedSweep() {
    return (
        <svg aria-hidden="true" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="300" fill="var(--birthday-paper)" />
            <path
                d="M-10 220 C 90 130, 180 250, 280 160 S 370 110, 415 150"
                stroke="var(--birthday-red)"
                strokeWidth="30"
                strokeLinecap="round"
                opacity="0.85"
            />
            <path
                d="M-10 255 C 110 210, 230 270, 410 210"
                stroke="var(--birthday-crimson)"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.6"
            />
            <circle cx="330" cy="70" r="5" fill="var(--birthday-ink)" opacity="0.5" />
        </svg>
    );
}

function BlueWash() {
    return (
        <svg aria-hidden="true" viewBox="0 0 300 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="300" height="400" fill="var(--birthday-paper)" />
            <ellipse cx="150" cy="140" rx="120" ry="110" fill="var(--birthday-blue)" opacity="0.35" />
            <path
                d="M30 330 C 90 240, 170 300, 270 210"
                stroke="var(--birthday-cobalt)"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.65"
            />
            <path d="M40 60 L 260 80" stroke="var(--birthday-ink)" strokeWidth="2" opacity="0.4" />
        </svg>
    );
}

function CrossStroke() {
    return (
        <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="400" fill="var(--birthday-paper)" />
            <path
                d="M30 320 C 130 220, 240 260, 370 120"
                stroke="var(--birthday-blue)"
                strokeWidth="22"
                strokeLinecap="round"
                opacity="0.7"
            />
            <path
                d="M40 110 C 150 180, 250 160, 365 260"
                stroke="var(--birthday-crimson)"
                strokeWidth="16"
                strokeLinecap="round"
                opacity="0.7"
            />
            <circle cx="200" cy="210" r="5" fill="var(--birthday-ink)" opacity="0.55" />
        </svg>
    );
}

function OrbitalRed() {
    return (
        <svg aria-hidden="true" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="300" fill="var(--birthday-paper)" />
            <circle cx="200" cy="150" r="95" stroke="var(--birthday-red)" strokeWidth="26" opacity="0.8" />
            <ellipse cx="200" cy="150" rx="130" ry="60" stroke="var(--birthday-blue)" strokeWidth="6" opacity="0.5" />
            <path d="M20 270 L 380 40" stroke="var(--birthday-ink)" strokeWidth="2" opacity="0.35" />
        </svg>
    );
}

function CobaltLine() {
    return (
        <svg aria-hidden="true" viewBox="0 0 300 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="300" height="400" fill="var(--birthday-paper)" />
            <path
                d="M150 20 C 140 130, 160 260, 145 380"
                stroke="var(--birthday-cobalt)"
                strokeWidth="9"
                strokeLinecap="round"
                opacity="0.75"
            />
            <path
                d="M40 300 C 110 260, 190 290, 260 240"
                stroke="var(--birthday-red)"
                strokeWidth="20"
                strokeLinecap="round"
                opacity="0.7"
            />
            <circle cx="150" cy="110" r="26" fill="var(--birthday-crimson)" opacity="0.55" />
        </svg>
    );
}

function WideField() {
    return (
        <svg aria-hidden="true" viewBox="0 0 640 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="640" height="400" fill="var(--birthday-paper)" />
            <rect y="240" width="640" height="160" fill="var(--birthday-blue)" opacity="0.28" />
            <path
                d="M-10 220 C 140 120, 300 260, 460 160 S 580 130, 655 170"
                stroke="var(--birthday-red)"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.85"
            />
            <path
                d="M-10 90 C 180 60, 420 110, 655 70"
                stroke="var(--birthday-cobalt)"
                strokeWidth="5"
                opacity="0.5"
            />
            <circle cx="520" cy="300" r="6" fill="var(--birthday-ink)" opacity="0.5" />
        </svg>
    );
}

const ARTWORK_BY_INDEX = [RedSweep, BlueWash, CrossStroke, OrbitalRed, CobaltLine, WideField] as const;

export default function Gallery() {
    return (
        <section
            id="gallery"
            aria-label="Artwork gallery"
            className="scroll-mt-8"
            style={{ backgroundColor: 'var(--birthday-paper-dark)' }}
        >
            <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <div className="birthday-reveal" style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}>
                    <p className="birthday-artist-index">02 / The Works</p>
                    <p className="birthday-eyebrow mt-5" style={{ color: 'var(--birthday-blue)' }}>
                        Selected Works
                    </p>
                    <h2 className="birthday-artist-heading mt-4">HER COLORS</h2>
                    <p className="mt-4 text-sm tracking-[0.22em] uppercase opacity-70">
                        Six studies in red &amp; blue
                    </p>
                </div>

                <ul className="birthday-gallery-grid mt-14 list-none p-0" role="list">
                    {galleryItems.map((item, index) => {
                        const layout = LAYOUT_BY_INDEX[index % LAYOUT_BY_INDEX.length];
                        const Artwork = ARTWORK_BY_INDEX[index % ARTWORK_BY_INDEX.length];
                        const number = String(index + 1).padStart(2, '0');
                        const delay = Math.min(index * 90, 450);

                        return (
                            <li
                                key={item.id}
                                className={`birthday-reveal birthday-frame birthday-gallery-item ${layout.item} p-4 sm:p-5`}
                                style={{ '--birthday-reveal-delay': `${delay}ms` } as CSSProperties}
                            >
                                <figure className="m-0">
                                    <div className={`birthday-gallery-canvas border birthday-rule ${layout.canvas}`}>
                                        {item.src ? (
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                loading="lazy"
                                                className={`birthday-gallery-img${item.fit === 'contain' ? ' birthday-gallery-img--contain' : ''}`}
                                            />
                                        ) : (
                                            <Artwork />
                                        )}
                                    </div>
                                    <figcaption className="birthday-gallery-caption mt-4">
                                        <p className="birthday-gallery-num">{number}</p>
                                        <h3 className="mt-2 text-base font-medium">{item.title}</h3>
                                        <p className="mt-1 text-sm opacity-70">
                                            {item.year ? `${item.medium} · ${item.year}` : item.medium}
                                        </p>
                                    </figcaption>
                                </figure>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
