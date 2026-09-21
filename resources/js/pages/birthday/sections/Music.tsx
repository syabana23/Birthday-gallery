import type { CSSProperties } from 'react';
import { musicContent } from '../data/content';

export default function Music() {
    return (
        <section
            id="music"
            aria-label="Music player"
            className="scroll-mt-8"
            style={{ backgroundColor: 'var(--birthday-paper-dark)' }}
        >
            <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <p
                    className="birthday-reveal birthday-artist-index"
                    style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                >
                    05 / This song
                </p>

                <div className="birthday-music-grid mt-8">
                    <div
                        className="birthday-reveal birthday-music-lead"
                        style={{ '--birthday-reveal-delay': '120ms' } as CSSProperties}
                    >
                        <p className="birthday-eyebrow" style={{ color: 'var(--birthday-crimson)' }}>
                            {musicContent.eyebrow}
                        </p>
                        <h2 className="birthday-artist-heading mt-4">{musicContent.heading}</h2>
                        <div aria-hidden="true" className="birthday-artist-rule mt-7" />
                    </div>

                    <div
                        className="birthday-reveal birthday-frame birthday-music-panel"
                        style={{ '--birthday-reveal-delay': '240ms' } as CSSProperties}
                    >
                        <p className="birthday-eyebrow opacity-70">Now playing</p>
                        <p className="birthday-music-track mt-3">{musicContent.trackTitle}</p>
                        <p className="mt-3 max-w-lg text-sm leading-relaxed opacity-70">
                            {musicContent.note}
                        </p>

                        <svg
                            aria-hidden="true"
                            viewBox="0 0 320 64"
                            fill="none"
                            className="birthday-music-wave mt-8 w-full max-w-md"
                        >
                            {[
                                20, 34, 26, 44, 38, 52, 30, 46, 24, 40, 50, 32, 42, 22, 36, 48,
                                28, 44, 34, 26,
                            ].map((height, index) => (
                                <line
                                    key={`wave-${height}-${index}`}
                                    x1={10 + index * 15}
                                    y1={32 - height / 2}
                                    x2={10 + index * 15}
                                    y2={32 + height / 2}
                                    stroke={
                                        index % 4 === 0
                                            ? 'var(--birthday-red)'
                                            : 'var(--birthday-blue)'
                                    }
                                    strokeWidth={index % 4 === 0 ? 5 : 3}
                                    strokeLinecap="round"
                                    opacity={index % 4 === 0 ? 0.8 : 0.5}
                                />
                            ))}
                            <path
                                d="M4 52 C 90 44, 220 58, 316 46"
                                stroke="var(--birthday-cobalt)"
                                strokeWidth="2"
                                opacity="0.45"
                            />
                        </svg>

                        <div className="birthday-music-audio mt-8">
                            <audio
                                controls
                                preload="none"
                                src={musicContent.src}
                                aria-label={`Audio player for ${musicContent.trackTitle}`}
                            />
                        </div>
                        {!musicContent.src && (
                            <p className="mt-4 text-sm opacity-70">Audio will be added here.</p>
                        )}
                        <p className="birthday-music-cue mt-6">Press play when you&apos;re ready</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
