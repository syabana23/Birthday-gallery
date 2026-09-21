import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../css/app.css';
import '../../css/birthday.css';
import StaticBirthdayPage from './StaticBirthdayPage';

const container = document.getElementById('birthday-root');

if (!container) {
    throw new Error('Birthday static root element is missing.');
}

createRoot(container).render(
    <StrictMode>
        <StaticBirthdayPage />
    </StrictMode>,
);
