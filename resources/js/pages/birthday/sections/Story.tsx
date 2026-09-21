import type { CSSProperties } from 'react';
import { storyContent } from '../data/content';

export default function Story() {
    return (
        <section id="story" aria-label="Our story" className="scroll-mt-8">
            <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <p
                    className="birthday-reveal birthday-artist-index"
                    style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                >
                    03 / Between the colors
                </p>

                <div className="birthday-story-grid mt-8">
                    <div
                        className="birthday-reveal birthday-story-lead"
                        style={{ '--birthday-reveal-delay': '120ms' } as CSSProperties}
                    >
                        <p
                            className="birthday-eyebrow"
                            style={{ color: 'var(--birthday-crimson)' }}
                        >
                            {storyContent.eyebrow}
                        </p>
                        <h2 className="birthday-artist-heading mt-4">{storyContent.heading}</h2>
                        <div aria-hidden="true" className="birthday-artist-rule mt-7" />
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 160 48"
                            fill="none"
                            className="birthday-story-mark mt-8 w-40"
                        >
                            <path
                                d="M6 32 C 45 14, 80 34, 118 20"
                                stroke="var(--birthday-red)"
                                strokeWidth="7"
                                strokeLinecap="round"
                                opacity="0.85"
                            />
                            <path
                                d="M42 38 C 80 24, 110 36, 154 22"
                                stroke="var(--birthday-blue)"
                                strokeWidth="5"
                                strokeLinecap="round"
                                opacity="0.6"
                            />
                        </svg>
                    </div>

                    <div
                        className="birthday-reveal birthday-story-body"
                        style={{ '--birthday-reveal-delay': '240ms' } as CSSProperties}
                    >
                        <div className="birthday-story-prose text-base opacity-90 sm:text-lg">
                            {storyContent.paragraphs.map((paragraph, index) => (
                                <p
                                    key={`story-paragraph-${index}`}
                                    className={index === 0 ? 'birthday-story-dropcap' : undefined}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <p className="birthday-story-meta mt-10">A story in progress</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
