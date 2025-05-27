import React, { createContext, useCallback, useState } from 'react';
import { DialogOptions, DialogState } from '../types';
import Modal from './modal';

const DialogContext = createContext<(message: string, options?: DialogOptions) => Promise<boolean>>(
    () => {
        throw new Error('DialogProvider is missing');
    }
);

const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<DialogState>({
        open: false,
        message: '',
        options: {
            type: 'confirm'
        }
    });

    const openDialog = useCallback((message: string, options?: DialogOptions) => {
        return new Promise<boolean>((resolve, reject) => {
            setState((prev) => ({
                ...prev,
                open: true,
                title: options?.title,
                message,
                options: { ...options },
                resolve,
                reject
            }));
        });
    }, []);

    const handleClose = (confirmed: boolean) => {
        setState((prev) => {
            if (confirmed) {
                prev.resolve?.(true);
            } else {
                prev.reject?.();
            }
            return { ...prev, open: false };
        });
    };

    return (
        <DialogContext.Provider value={openDialog}>
            {children}
            <Modal
                open={state.open}
                title={state.title}
                message={state.message}
                onClose={handleClose}
                options={state.options}
            />
        </DialogContext.Provider>
    );
};

export { DialogContext, DialogProvider };

