import { useRef } from 'react';
import { Head } from '@inertiajs/react';
import '../../css/birthday.css';
import { useBirthdayReveal } from './birthday/hooks/use-reveal';
import { useBirthdayTheme } from './birthday/hooks/use-birthday-theme';
import ThemeToggle from './birthday/components/ThemeToggle';
import Artist from './birthday/sections/Artist';
import Closing from './birthday/sections/Closing';
import Gallery from './birthday/sections/Gallery';
import Hero from './birthday/sections/Hero';
import Letter from './birthday/sections/Letter';
import Memories from './birthday/sections/Memories';
import Music from './birthday/sections/Music';
import Story from './birthday/sections/Story';
import ThisYear from './birthday/sections/ThisYear';

export default function Birthday() {
    const rootRef = useRef<HTMLElement | null>(null);
    useBirthdayReveal(rootRef);
    const { theme, toggleTheme } = useBirthdayTheme();

    return (
        <>
            <Head title="For Athar" />
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
        </>
    );
}
