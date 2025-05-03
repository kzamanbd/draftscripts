import React, { createContext, useCallback, useState } from 'react';
import Modal from './modal';

type DialogType = 'success' | 'error' | 'warning' | 'confirm';

type DialogOptions = {
    type?: DialogType;
    title?: string;
    okText?: string;
    autoHideDelay?: number;
    showCancel?: boolean;
    showOk?: boolean;
    cancelText?: string;
    allowOutsideClick?: boolean;
};

type DialogState = {
    open: boolean;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    options: DialogOptions;
    resolve?: (value: boolean) => void;
    reject?: () => void;
};

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
        state.open = false;
        if (confirmed) {
            state.resolve?.(true);
        } else {
            state.reject?.();
        }
        setState((prev) => ({ ...prev, open: false }));
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
export type { DialogOptions, DialogType };

