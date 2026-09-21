import type { CSSProperties } from 'react';
import { artistContent } from '../data/content';

export default function Artist() {
    return (
        <section id="artist" aria-label="About the artist" className="scroll-mt-8">
            <div className="birthday-artist-grid mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <div
                    className="birthday-reveal birthday-artist-lead flex flex-col justify-center"
                    style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                >
                    <p className="birthday-artist-index">01 / The Artist</p>
                    <p
                        className="birthday-eyebrow mt-5"
                        style={{ color: 'var(--birthday-crimson)' }}
                    >
                        {artistContent.eyebrow}
                    </p>
                    <h2 className="birthday-artist-heading mt-4">{artistContent.heading}</h2>
                    <div aria-hidden="true" className="birthday-artist-rule mt-7" />
                    <div className="mt-7 space-y-5 text-base leading-relaxed opacity-90">
                        {artistContent.paragraphs.map((paragraph, index) => (
                            <p key={`artist-paragraph-${index}`}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div
                    className="birthday-reveal birthday-artist-visual"
                    style={{ '--birthday-reveal-delay': '140ms' } as CSSProperties}
                >
                    <figure className="birthday-frame p-4 sm:p-5">
                        <div className="birthday-artist-canvas border birthday-rule">
                            <img
                                src="/images/birthday/memories/magnolia.jpeg"
                                alt="Portrait photo of Athar wearing glasses, chin resting on her hand"
                                loading="lazy"
                                className="birthday-artist-photo"
                            />
                        </div>
                        <figcaption className="flex items-baseline justify-between gap-4 pt-4 text-xs tracking-[0.22em] uppercase opacity-70">
                            <span>The artist</span>
                            <span>Portrait</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
