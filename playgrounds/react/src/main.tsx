// @ts-ignore
import { DialogProvider } from '@draftscripts/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DialogProvider>
            <App />
        </DialogProvider>
    </StrictMode>
);
