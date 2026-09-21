import type { CSSProperties } from 'react';
import { heroContent, letterContent } from '../data/content';

export default function Letter() {
    return (
        <section id="letter" aria-label="Birthday letter" className="scroll-mt-8">
            <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <div
                    className="birthday-reveal birthday-letter-grid"
                    style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                >
                    <div className="birthday-letter-lead">
                        <p className="birthday-artist-index">07 / For Athar</p>
                        <p className="birthday-eyebrow mt-5" style={{ color: 'var(--birthday-blue)' }}>
                            {letterContent.eyebrow}
                        </p>
                        <h2 className="birthday-artist-heading mt-4">{letterContent.heading}</h2>
                        <div aria-hidden="true" className="birthday-artist-rule mt-7" />
                    </div>

                    <div
                        className="birthday-reveal birthday-frame birthday-letter-panel"
                        style={{ '--birthday-reveal-delay': '120ms' } as CSSProperties}
                    >
                        <p className="birthday-letter-date">{heroContent.date}</p>
                        <p className="birthday-letter-label mt-2">A letter, written for you</p>

                        <div className="birthday-letter-body mt-8 opacity-90">
                            {letterContent.paragraphs.map((paragraph, index) => (
                                <p key={`letter-paragraph-${index}`}>{paragraph}</p>
                            ))}
                        </div>

                        <p
                            className="mt-8 text-right text-lg italic"
                            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                            {letterContent.signature}
                        </p>

                        <svg
                            aria-hidden="true"
                            viewBox="0 0 200 40"
                            fill="none"
                            className="birthday-reveal birthday-letter-mark mt-6 ml-auto w-48"
                            style={{ '--birthday-reveal-delay': '240ms' } as CSSProperties}
                        >
                            <path
                                d="M6 28 C 55 10, 110 32, 160 16 S 190 14, 196 20"
                                stroke="var(--birthday-red)"
                                strokeWidth="5"
                                strokeLinecap="round"
                                opacity="0.75"
                            />
                            <path
                                d="M10 34 C 70 28, 130 36, 194 30"
                                stroke="var(--birthday-cobalt)"
                                strokeWidth="2"
                                opacity="0.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
