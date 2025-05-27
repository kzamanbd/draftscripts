export type DialogType = 'success' | 'error' | 'warning' | 'confirm';

export type DialogOptions = {
    type?: DialogType;
    title?: string;
    okText?: string;
    autoHideDelay?: number;
    showCancel?: boolean;
    showOk?: boolean;
    cancelText?: string;
    allowOutsideClick?: boolean;
};

export type DialogState = {
    open: boolean;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    options: DialogOptions;
    resolve?: (value: boolean) => void;
    reject?: () => void;
};

export type ModalProps = {
    open: boolean;
    title?: string;
    message?: string;
    options: DialogOptions;
    onClose: (confirmed: boolean) => void;
};

export type TypeProps = {
    icon: ReactNode;
    defaultTitle: string;
    iconClass?: string;
    buttonClass?: string;
};
