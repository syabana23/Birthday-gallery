export interface GalleryItem {
    id: string;
    title: string;
    medium: string;
    year: string;
    alt: string;
    src?: string;
    fit?: 'cover' | 'contain';
}

export interface MemoryPhoto {
    id: string;
    caption: string;
    alt: string;
    src?: string;
}

export const heroContent = {
    name: 'ATHAR',
    tagline: 'A little gallery made for you.',
    date: '23 — 09 — 2026',
};

export const artistContent = {
    eyebrow: 'The Artist',
    heading: 'Athar, painter of quiet abstractions.',
    paragraphs: [
        'Athar is the kind of artist with an abstract mind — hard to predict, with an imagination that feels endlessly wide. Sometimes it feels like she doesn’t only paint the canvas; somehow, she paints a little bit of color into my life too. She’s incredibly perfectionistic with every stroke, every color, and every little detail she puts into her work. And honestly, she’s amazing.',
        'To her, art is alive. And maybe that’s what makes her different — she doesn’t just create art, she is a form of art herself.',
    ],
};

export const galleryItems: GalleryItem[] = [
    { id: 'work-01', title: 'Work 01', medium: 'Artwork', year: '', alt: 'Watercolor doodle sheet with colorful suns, stars, spirals and flowers on white paper', src: '/images/birthday/artworks/canvas1.jpeg', fit: 'contain' },
    { id: 'work-02', title: 'Work 02', medium: 'Artwork', year: '', alt: 'Hand holding a small watercolor painting of maroon flowers in a vase, photographed at an outdoor cafe', src: '/images/birthday/artworks/canvas2.jpeg' },
    { id: 'work-03', title: 'Work 03', medium: 'Artwork', year: '', alt: 'Red clay pendant engraved with the words LOVE MEET BY ACCIDENT, photographed on a craft work mat', src: '/images/birthday/artworks/kaca.jpeg' },
    { id: 'work-04', title: 'Work 04', medium: 'Artwork', year: '', alt: 'Black ink journal sketches of a heart padlock, chains, a key and a spiky eye on lined paper', src: '/images/birthday/artworks/jurnal.jpeg', fit: 'contain' },
    { id: 'work-05', title: 'Work 05', medium: 'Artwork', year: '', alt: 'Black line-art heart with radiating tribal motifs on white fabric', src: '/images/birthday/artworks/baju.jpeg' },
    { id: 'work-06', title: 'Work 06', medium: 'Artwork', year: '', alt: 'Sheet of colorful cartoon character stickers in pink, orange, yellow and teal', src: '/images/birthday/artworks/emot.jpeg', fit: 'contain' },
];

export const storyContent = {
    eyebrow: 'Our Story',
    heading: 'A few chapters, gently told.',
    paragraphs: [
        'I always remember the moments that became the beginning of us. There are a few that still stay really clearly in my mind — riding home late at night, sometimes even at dawn, singing happily on the motorcycle like we didn’t have anything else to worry about. Or that night when we walked together around Surya Kencana, and I carried you. And I still remember our first kiss, that afternoon after Bogor had just been washed by the rain.',
        'We’ve also had moments that weren’t easy. Some of them hurt, some of them left things for us to learn. But maybe those moments are part of our story too. Not everything between us has always been perfect, but every part of it has taught us something about each other, and about ourselves.',
        'I hope that this time, we can keep learning to understand each other, take better care of our communication, and keep drawing on the canvas of our life together. I hope we can both become better versions of ourselves — not only for you, not only for me, but for us.',
    ],
};

export const memoryPhotos: MemoryPhoto[] = [
    { id: 'memory-01', caption: 'The day I came to see you, and somehow we ended up making matching bracelets. My first time making one myself — and definitely a little special because I made it with you.', alt: 'The couple showing matching bracelets at a table indoors', src: '/images/birthday/memories/calf.jpeg' },
    { id: 'memory-02', caption: 'Our first date. Everything still felt a little awkward back then. Even holding hands felt awkward. Funny how much can change after that.', alt: 'Instant-style photo of the smiling couple outdoors at night', src: '/images/birthday/memories/rumaja.jpeg' },
];

export interface MemoryVideo {
    id: string;
    src?: string;
    poster?: string;
    alt: string;
    caption: string;
}

export const memoryVideo: MemoryVideo = {
    id: 'memory-video-01',
    src: '/images/birthday/memories/hme.mp4',
    alt: 'A personal video moment',
    caption: 'You came over to my house, and we were getting ready to go to campus while listening to music. And yes, you were already complaining because I was taking forever to get ready.',
};

export interface YearAchievement {
    id: string;
    number: string;
    title: string;
    description: string;
}

export const thisYearContent = {
    eyebrow: 'This Year',
    heading: 'Three moments.',
    intro: 'A small archive of this year.',
    achievements: [
        { id: 'year-01', number: '01', title: 'Seminar Proposal', description: 'You made it through the struggle of preparing your thesis proposal, and you made it through your seminar proposal too. I’m genuinely proud of you for getting through that.' },
        { id: 'year-02', number: '02', title: 'Graphic Designer — Potato Club', description: 'I think this is really cool. Not everyone can work, not everyone wants to work, and not everyone gets the chance to be accepted somewhere. But you did. And honestly, you did something that I’m not even sure I could do myself. Feel so, so proud of u.' },
        { id: 'year-03', number: '03', title: 'Internship', description: 'This one is probably the newest chapter. I’m proud of you for finally getting the chance to experience an internship and see what real work life feels like. More than that, I’m proud because you faced all those worries and fears you had before starting it.' },
    ] as YearAchievement[],
};

export const musicContent = {
    eyebrow: 'Soundtrack',
    heading: 'A song for the gallery.',
    trackTitle: 'red and blue in ur eyes',
    note: 'A song picked for this little gallery.',
    src: '/audio/birthday/birthday.mp3',
};

export const letterContent = {
    eyebrow: 'Birthday Letter',
    heading: 'Dear Athar,',
    paragraphs: [
        'I just want you to know that I love you. Like, really, really, really love you. And I’m sorry if I still have so many things that I need to improve about myself. I know I still have a lot of shortcomings, but don’t worry — I’ll keep trying to work on them and become better.',
        'Anyway, happy birthday, Athar. My lovely queen. I hope this year brings you closer to the person you want to become. Maybe kurang-kurangin marah-marahnya karena udah berumur juga wkwk. And jangan batu kalau lagi dikasih tahu, okay?',
        'I’m sorry I couldn’t give you an actual gift yet. Honestly, I feel pretty sad about that. But I really hope you like this little thing I made for you. And don’t worry, there’s still a gift coming later. Wait for it, okay? I promise. For now, I just want to say happy birthday, Atharr. I hope good things in this world never get tired of finding their way to you. Love you, my queen.',
    ],
    signature: '— With love, always.',
};

export const closingContent = {
    heading: 'This little gallery is yours.',
    text: 'I hope you like this. I love you. Always.',
    date: '23 September 2026',
};
