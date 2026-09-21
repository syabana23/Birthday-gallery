import type { CSSProperties } from 'react';
import { closingContent } from '../data/content';

export default function Closing() {
    return (
        <section id="closing" aria-label="Closing message" className="birthday-closing scroll-mt-8">
            <div className="birthday-closing-inner mx-auto w-full max-w-4xl px-5 sm:px-8">
                <p
                    className="birthday-reveal birthday-closing-index"
                    style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                >
                    08 / The last room
                </p>
                <h2
                    className="birthday-reveal birthday-closing-heading mt-6"
                    style={{ '--birthday-reveal-delay': '120ms' } as CSSProperties}
                >
                    {closingContent.heading}
                </h2>
                <p
                    className="birthday-reveal birthday-closing-date mt-8"
                    style={{ '--birthday-reveal-delay': '240ms' } as CSSProperties}
                >
                    {closingContent.date}
                </p>
                <p
                    className="birthday-reveal birthday-closing-message mt-5 text-base opacity-80 sm:text-lg"
                    style={{ '--birthday-reveal-delay': '240ms' } as CSSProperties}
                >
                    {closingContent.text}
                </p>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 520 160"
                    fill="none"
                    className="birthday-reveal birthday-closing-mark mt-12"
                    style={{ '--birthday-reveal-delay': '320ms' } as CSSProperties}
                >
                    <path
                        d="M-10 140 C 90 110, 170 120, 260 80 S 340 60, 380 70"
                        stroke="var(--birthday-red)"
                        strokeWidth="22"
                        strokeLinecap="round"
                        opacity="0.8"
                    />
                    <path
                        d="M530 20 C 430 45, 350 40, 270 75 S 200 95, 160 85"
                        stroke="var(--birthday-blue)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        opacity="0.65"
                    />
                    <path
                        d="M-10 150 C 120 138, 300 150, 420 120"
                        stroke="var(--birthday-crimson)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                    <circle cx="120" cy="40" r="4" fill="var(--birthday-cobalt)" opacity="0.55" />
                    <circle cx="420" cy="125" r="4" fill="var(--birthday-red)" opacity="0.55" />
                    <path
                        d="M240 130 L 290 128"
                        stroke="var(--birthday-ink)"
                        strokeWidth="2"
                        opacity="0.4"
                    />
                </svg>
            </div>
        </section>
    );
}
