import type { CSSProperties } from 'react';
import { heroContent } from '../data/content';

export default function Hero() {
    return (
        <section aria-label="Birthday hero" className="relative overflow-hidden">
            <div className="mx-auto flex min-h-[96svh] w-full max-w-6xl flex-col justify-center px-5 py-14 sm:px-8 sm:py-20">
                <div
                    className="birthday-reveal birthday-hero-frame"
                    style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                >
                    {/* Red brush stroke behind the typography */}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 640 220"
                        fill="none"
                        className="birthday-hero-brush birthday-hero-brush--red -top-10 -left-16 w-[115%] max-w-none sm:-top-16 sm:-left-24 sm:w-[85%]"
                    >
                        <path
                            d="M12 150 C 120 60, 260 190, 400 110 S 560 60, 628 130"
                            stroke="var(--birthday-red)"
                            strokeWidth="30"
                            strokeLinecap="round"
                            opacity="0.8"
                        />
                        <path
                            d="M30 175 C 160 120, 320 200, 470 150 S 580 130, 620 160"
                            stroke="var(--birthday-crimson)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            opacity="0.55"
                        />
                    </svg>

                    {/* Blue organic wash, top-right corner */}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 300 220"
                        fill="none"
                        className="birthday-hero-brush birthday-hero-brush--blue top-0 right-0 w-[46%] max-w-[300px] sm:w-[30%]"
                    >
                        <path
                            d="M20 200 C 60 120, 40 60, 120 30 S 250 20, 280 90 S 220 200, 120 195 Z"
                            fill="var(--birthday-blue)"
                            opacity="0.38"
                        />
                        <path
                            d="M60 180 C 100 120, 120 80, 180 70"
                            stroke="var(--birthday-cobalt)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            opacity="0.5"
                        />
                    </svg>

                    <div className="birthday-hero-grid">
                        <div
                            className="birthday-reveal birthday-hero-main"
                            style={{ '--birthday-reveal-delay': '120ms' } as CSSProperties}
                        >
                            <p
                                className="birthday-eyebrow"
                                style={{ color: 'var(--birthday-blue)' }}
                            >
                                A little art gallery — Nº 01
                            </p>
                            <h1 className="birthday-hero-title mt-6">{heroContent.name}</h1>
                            <p className="mt-6 max-w-md text-lg leading-relaxed">
                                {heroContent.tagline}
                            </p>
                            <p className="mt-8 inline-block border-t birthday-rule pt-5 text-sm tracking-[0.28em]">
                                {heroContent.date}
                            </p>
                        </div>

                        <aside
                            aria-label="Exhibition wall label"
                            className="birthday-reveal birthday-hero-aside flex flex-col justify-end"
                            style={{ '--birthday-reveal-delay': '240ms' } as CSSProperties}
                        >
                            <div className="birthday-hero-wall border-t birthday-rule pt-6">
                                <p className="birthday-eyebrow opacity-80">
                                    An artist / A story / A day
                                </p>
                                <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                                    <div className="flex gap-4">
                                        <dt className="w-16 shrink-0 tracking-[0.2em] uppercase opacity-60">
                                            Show
                                        </dt>
                                        <dd>For Athar, one day only</dd>
                                    </div>
                                    <div className="flex gap-4">
                                        <dt className="w-16 shrink-0 tracking-[0.2em] uppercase opacity-60">
                                            Date
                                        </dt>
                                        <dd>{heroContent.date}</dd>
                                    </div>
                                    <div className="flex gap-4">
                                        <dt className="w-16 shrink-0 tracking-[0.2em] uppercase opacity-60">
                                            Room
                                        </dt>
                                        <dd>Scroll gently through eight rooms</dd>
                                    </div>
                                </dl>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="birthday-hero-cue mt-10 flex justify-center sm:justify-start">
                    <a href="#artist" className="birthday-scroll-cue">
                        Scroll to explore
                    </a>
                </div>
            </div>
        </section>
    );
}
