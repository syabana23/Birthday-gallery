import type { BirthdayTheme } from '../hooks/use-birthday-theme';

interface ThemeToggleProps {
    theme: BirthdayTheme;
    onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={onToggle}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="birthday-theme-toggle"
        >
            {isDark ? 'Lights on' : 'Dim the lights'}
        </button>
    );
}
