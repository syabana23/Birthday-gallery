import { useEffect } from 'react';

/**
 * Adds `.is-visible` to all `.birthday-reveal` descendants
 * when they enter the viewport. Native IntersectionObserver only.
 */
export function useBirthdayReveal(rootRef: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const targets = Array.from(root.querySelectorAll<HTMLElement>('.birthday-reveal'));

        if (typeof IntersectionObserver === 'undefined') {
            targets.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [rootRef]);
}
