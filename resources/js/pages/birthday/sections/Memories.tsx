import type { CSSProperties } from 'react';
import { memoryPhotos, memoryVideo } from '../data/content';

const LAYOUT_BY_INDEX = [
    { item: 'birthday-memories-photo--lead', canvas: 'birthday-memories-canvas--3-2' },
    { item: 'birthday-memories-photo--offset', canvas: 'birthday-memories-canvas--3-4' },
    { item: 'birthday-memories-photo--closing', canvas: 'birthday-memories-canvas--4-3' },
] as const;

function MarkCorner() {
    return (
        <svg aria-hidden="true" viewBox="0 0 300 200" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="300" height="200" fill="var(--birthday-paper-dark)" />
            <path
                d="M-10 160 C 60 110, 130 150, 210 100"
                stroke="var(--birthday-red)"
                strokeWidth="16"
                strokeLinecap="round"
                opacity="0.7"
            />
            <path d="M40 30 L 260 44" stroke="var(--birthday-cobalt)" strokeWidth="3" opacity="0.5" />
        </svg>
    );
}

function MarkOrbital() {
    return (
        <svg aria-hidden="true" viewBox="0 0 300 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="300" height="400" fill="var(--birthday-paper-dark)" />
            <circle cx="150" cy="170" r="70" stroke="var(--birthday-blue)" strokeWidth="14" opacity="0.55" />
            <path
                d="M30 330 C 100 290, 190 320, 270 270"
                stroke="var(--birthday-crimson)"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.65"
            />
        </svg>
    );
}

function MarkCrossing() {
    return (
        <svg aria-hidden="true" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="300" fill="var(--birthday-paper-dark)" />
            <path
                d="M20 250 C 120 180, 220 220, 380 120"
                stroke="var(--birthday-blue)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.55"
            />
            <path
                d="M30 90 C 140 140, 250 130, 375 190"
                stroke="var(--birthday-red)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}

const MARK_BY_INDEX = [MarkCorner, MarkOrbital, MarkCrossing] as const;

export default function Memories() {
    return (
        <section id="memories" aria-label="Memories together" className="scroll-mt-8">
            <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <div className="birthday-reveal" style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}>
                    <p className="birthday-artist-index">04 / Us</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                        <p className="birthday-eyebrow" style={{ color: 'var(--birthday-blue)' }}>
                            Memories
                        </p>
                        <p className="birthday-memories-archive">Personal archive</p>
                    </div>
                    <h2 className="birthday-artist-heading mt-4">Us, in small frames</h2>
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 120 24"
                        fill="none"
                        className="mt-6 h-4 w-28"
                    >
                        <path
                            d="M3 15 C 35 7, 75 19, 117 10"
                            stroke="var(--birthday-red)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            opacity="0.7"
                        />
                    </svg>
                </div>

                <ul className="birthday-memories-grid mt-12 list-none p-0" role="list">
                    {memoryPhotos.map((photo, index) => {
                        const layout = LAYOUT_BY_INDEX[index];
                        const Mark = MARK_BY_INDEX[index];
                        const number = String(index + 1).padStart(2, '0');

                        return (
                            <li
                                key={photo.id}
                                className={`birthday-reveal birthday-frame birthday-memories-photo ${layout.item}`}
                                style={{ '--birthday-reveal-delay': `${100 + index * 100}ms` } as CSSProperties}
                            >
                                <figure className="m-0">
                                    <div className={`birthday-memories-canvas border birthday-rule ${layout.canvas}`}>
                                        {/* Add src to this photo in content.ts to show the real photo:
                                            <img src={photo.src} alt={photo.alt} loading="lazy" /> */}
                                        {photo.src ? (
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                loading="lazy"
                                                className="birthday-memories-img"
                                            />
                                        ) : (
                                            <Mark />
                                        )}
                                    </div>
                                    <figcaption className="birthday-memories-caption">
                                        <p className="birthday-gallery-num">{number}</p>
                                        <p className="mt-2 text-sm leading-relaxed opacity-75">{photo.caption}</p>
                                    </figcaption>
                                </figure>
                            </li>
                        );
                    })}
                    <li
                        key={memoryVideo.id}
                        className="birthday-reveal birthday-frame birthday-memories-photo birthday-memories-photo--closing"
                        style={{ '--birthday-reveal-delay': '300ms' } as CSSProperties}
                    >
                        <figure className="m-0">
                            <div className="birthday-memories-canvas border birthday-rule birthday-memories-canvas--4-3">
                                {/* Add src to memoryVideo in content.ts to show the real video:
                                    <video src={memoryVideo.src} poster={memoryVideo.poster} controls preload="metadata" playsInline aria-label={memoryVideo.alt} /> */}
                                {memoryVideo.src ? (
                                    <video
                                        src={memoryVideo.src}
                                        poster={memoryVideo.poster}
                                        controls
                                        preload="metadata"
                                        playsInline
                                        aria-label={memoryVideo.alt}
                                        className="birthday-memory-video"
                                    />
                                ) : (
                                    <MarkCrossing />
                                )}
                            </div>
                            <figcaption className="birthday-memories-caption">
                                <p className="birthday-gallery-num">03</p>
                                <p className="mt-2 text-sm leading-relaxed opacity-75">{memoryVideo.caption}</p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    );
}
