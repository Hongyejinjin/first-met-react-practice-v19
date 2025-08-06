import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import Library from './chapter_03/Library';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Library />
    </StrictMode>
);
