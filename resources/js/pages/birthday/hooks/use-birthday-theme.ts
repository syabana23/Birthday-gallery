import { useCallback, useState } from 'react';

export type BirthdayTheme = 'light' | 'dark';

const STORAGE_KEY = 'birthday-theme';

function readInitialTheme(): BirthdayTheme {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
        return 'light';
    }

    try {
        return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
    } catch {
        return 'light';
    }
}

/**
 * Birthday-only theme state. Scoped to the birthday page via the
 * `data-theme` attribute — never touches the starter kit's `html.dark`.
 */
export function useBirthdayTheme() {
    const [theme, setThemeState] = useState<BirthdayTheme>(readInitialTheme);

    const setTheme = useCallback((next: BirthdayTheme) => {
        setThemeState(next);

        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Private mode etc. — theme simply won't persist.
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState((prev) => {
            const next: BirthdayTheme = prev === 'dark' ? 'light' : 'dark';

            try {
                window.localStorage.setItem(STORAGE_KEY, next);
            } catch {
                // Private mode etc. — theme simply won't persist.
            }

            return next;
        });
    }, []);

    return { theme, setTheme, toggleTheme };
}
