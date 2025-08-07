import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ConfirmButton />
    </StrictMode>
);
