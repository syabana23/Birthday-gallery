import { useRef } from 'react';
import { useBirthdayReveal } from '../pages/birthday/hooks/use-reveal';
import { useBirthdayTheme } from '../pages/birthday/hooks/use-birthday-theme';
import ThemeToggle from '../pages/birthday/components/ThemeToggle';
import Artist from '../pages/birthday/sections/Artist';
import Closing from '../pages/birthday/sections/Closing';
import Gallery from '../pages/birthday/sections/Gallery';
import Hero from '../pages/birthday/sections/Hero';
import Letter from '../pages/birthday/sections/Letter';
import Memories from '../pages/birthday/sections/Memories';
import Music from '../pages/birthday/sections/Music';
import Story from '../pages/birthday/sections/Story';
import ThisYear from '../pages/birthday/sections/ThisYear';

/**
 * Static-host entry for the birthday page. Mirrors the section composition
 * of the Inertia `birthday` page without requiring a Laravel/Inertia runtime.
 */
export default function StaticBirthdayPage() {
    const rootRef = useRef<HTMLElement | null>(null);
    useBirthdayReveal(rootRef);
    const { theme, toggleTheme } = useBirthdayTheme();

    return (
        <main
            ref={rootRef}
            data-theme={theme}
            className="birthday-root birthday-paper-grain min-h-screen antialiased"
        >
            <Hero />
            <Artist />
            <Gallery />
            <Story />
            <Memories />
            <Music />
            <ThisYear />
            <Letter />
            <Closing />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </main>
    );
}
