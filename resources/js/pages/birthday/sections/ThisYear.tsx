import type { CSSProperties } from 'react';
import { thisYearContent } from '../data/content';

export default function ThisYear() {
    return (
        <section id="this-year" aria-label="This year" className="scroll-mt-8">
            <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
                <div className="birthday-this-year-grid">
                    <div
                        className="birthday-reveal birthday-this-year-lead"
                        style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                    >
                        <p className="birthday-artist-index">06 / This year</p>
                        <p className="birthday-eyebrow mt-5" style={{ color: 'var(--birthday-crimson)' }}>
                            {thisYearContent.eyebrow}
                        </p>
                        <h2 className="birthday-artist-heading mt-4">{thisYearContent.heading}</h2>
                        <div aria-hidden="true" className="birthday-artist-rule mt-7" />
                        <p className="mt-7 max-w-md text-base leading-relaxed opacity-80">
                            {thisYearContent.intro}
                        </p>
                    </div>

                    <ul
                        className="birthday-reveal birthday-this-year-list list-none p-0"
                        style={{ '--birthday-reveal-delay': '0ms' } as CSSProperties}
                        role="list"
                    >
                        {thisYearContent.achievements.map((achievement, index) => (
                            <li
                                key={achievement.id}
                                className={`birthday-reveal birthday-this-year-item ${index % 2 === 1 ? 'birthday-this-year-item--offset' : ''}`}
                                style={{ '--birthday-reveal-delay': `${index * 120}ms` } as CSSProperties}
                            >
                                <p className="birthday-this-year-number">{achievement.number}</p>
                                <h3 className="mt-3 text-xl font-medium">{achievement.title}</h3>
                                <p className="mt-2 max-w-lg text-base leading-relaxed opacity-75">
                                    {achievement.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
