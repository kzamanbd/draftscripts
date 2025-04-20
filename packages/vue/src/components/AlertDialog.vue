<script setup lang="ts">
    import { computed, ref } from 'vue';

    interface DialogTypes {
        type: 'success' | 'error' | 'warning' | 'confirm';
        title?: string;
        message?: string;
        loading?: boolean;
        iconClass?: string;
        okText?: string;
        autoHideDelay?: number;
        showOkBtn?: boolean;
        showCancelBtn?: boolean;
        allowOutsideClick?: boolean;
        animationData?: any;
        resolve: (value: boolean) => void;
        reject: (value: boolean) => void;
    }

    defineProps({
        customClasses: {
            type: Object,
            default: () => ({})
        }
    });

    const dialog = ref<DialogTypes>({
        title: 'Operation Successful',
        type: 'success',
        message: '',
        okText: 'OK',
        iconClass: 'check_circle',
        showOkBtn: true,
        showCancelBtn: false,
        allowOutsideClick: true,
        autoHideDelay: 2000,
        resolve: () => {},
        reject: () => {}
    });
    const visible = ref(false);
    const isHovered = ref(false);
    let autoHideTimeout: any = null;

    const cancelHandler = () => {
        visible.value = false;
        isHovered.value = false;
        if (dialog.value.type === 'confirm') {
            dialog.value.reject(false);
        } else {
            dialog.value.resolve(true);
        }
    };

    const outsideClickHandler = (event: any) => {
        if (dialog.value.allowOutsideClick && !event.target.closest('.dialog__container')) {
            cancelHandler();
        }
    };

    const okHandler = () => {
        dialog.value.resolve(true);
        visible.value = false;
    };

    const modifiedOptions = (options: DialogTypes) => {
        const commonProps = {
            title: 'Success',
            type: 'success',
            okText: 'OK',
            iconClass: 'check_circle',
            showOkBtn: true,
            showCancelBtn: false,
            allowOutsideClick: true
        };

        const typeSpecificProps = {
            success: {
                title: 'Success'
            },
            error: {
                title: 'An error occurred',
                iconClass: 'error'
            },
            warning: {
                title: 'Warning',
                iconClass: 'error'
            },
            confirm: {
                title: 'Are You Sure?',
                okText: 'YES',
                showCancelBtn: true,
                iconClass: 'help'
            },
            progress: {
                title: 'Please wait...',
                showCancelBtn: false,
                showOkBtn: false,
                allowOutsideClick: false,
                iconClass: 'loading'
            }
        };

        const specificProps = typeSpecificProps[options.type] || {};

        return {
            ...commonProps,
            ...specificProps,
            ...options
        };
    };

    const resetAutoHideTimeout = (autoHideDelay: any) => {
        if (autoHideTimeout) clearTimeout(autoHideTimeout);
        if (dialog.value.type !== 'confirm') {
            autoHideTimeout = setTimeout(() => {
                if (visible.value && !isHovered.value) {
                    cancelHandler();
                }
            }, autoHideDelay);
        }
    };

    const mouseEnter = () => {
        isHovered.value = true;
        if (autoHideTimeout) {
            clearTimeout(autoHideTimeout);
        }
    };

    const mouseLeave = () => {
        isHovered.value = false;
        resetAutoHideTimeout(dialog.value.autoHideDelay);
    };

    const openDialog = (
        message: string,
        { autoHideDelay = 2000, ...options }: DialogTypes = {
            type: 'success',
            loading: false,
            resolve: () => {},
            reject: () => {}
        }
    ) => {
        visible.value = true;
        if (options.loading) {
            return new Promise((resolve) => {
                dialog.value = {
                    message,
                    // @ts-ignore
                    resolve,
                    autoHideDelay,
                    ...modifiedOptions(options)
                };
                resolve(cancelHandler);
            });
        }
        return new Promise((resolve, reject) => {
            dialog.value = {
                // @ts-ignore
                reject,
                // @ts-ignore
                resolve,
                message,
                autoHideDelay,
                ...modifiedOptions(options)
            };
            resetAutoHideTimeout(autoHideDelay);
        });
    };

    const dialogType = computed(() => {
        return ['dialog__container', `dialog__${dialog.value.type}`];
    });

    defineExpose({ openDialog });
</script>

<template>
    <div v-if="visible" class="dialog__overlay"></div>
    <Transition name="scale">
        <div v-if="visible" class="dialog__box" @click="outsideClickHandler">
            <div :class="dialogType" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
                <!-- <div class="loading__bar"></div> -->
                <div class="dialog__content">
                    <div class="dialog__icon">
                        <div v-if="dialog.loading" class="progress__icon">
                            <span class="dialog__loader"></span>
                        </div>
                        <span v-else class="material-icons">
                            {{ dialog.iconClass }}
                        </span>
                    </div>

                    <div class="dialog__title">{{ dialog.title }}</div>
                    <div class="dialog__message">{{ dialog.message }}</div>
                </div>

                <div class="dialog__btn-group">
                    <button
                        v-if="dialog.showCancelBtn"
                        class="dialog__btn error"
                        @click="cancelHandler">
                        CANCEL
                    </button>

                    <button
                        v-if="dialog.showOkBtn"
                        :class="dialog.type"
                        class="dialog__btn"
                        @click="okHandler">
                        {{ dialog.okText }}
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    :root {
        --blue: #026cd1;
        --bs-primary: var(--blue);
        --black: #000000;
        --white: #ffffff;
        --ice-white: #fbfcfe;
        --bluish-white: #e2edfa;
        --border-color: #e2edfa;
        --red: #df2a43;
        --bs-danger: var(--red);
        --redish-white: #f5bec6;
        --yellow: #fcc428;
        --yellowish-white: #fff7e3;
        --green: #2cda94;
        --greenish-white: #d2fccc;
        --gray: #526471;
        --text-red: #df2a43;
        --text-black: #36454f;
        --text-label: #36454f;
    }
    .dialog__box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .dialog__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 9998;
    }
    .dialog__container {
        width: 400px;
        min-height: 250px;
        padding: 1.5rem;
        background-color: white;
        border-radius: 6px;
        box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.1),
            0 1px 2px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        position: relative;
    }
    .loading__bar {
        width: 100%;
        height: 4px;
        background-color: var(--blue);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 6px 6px 0 0;
    }
    .dialog__container.dialog__progress {
        justify-content: center;
    }
    .dialog__icon {
        width: 4.5rem;
        height: 4.5rem;
        position: relative;
        color: var(--blue);
        background-color: var(--bluish-white);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    .dialog__icon .material-icons {
        font-size: 3rem;
    }
    .dialog__progress .dialog__icon {
        background: none;
        box-shadow: none;
    }
    .dialog__progress .dialog__btn-group {
        display: none;
    }
    .dialog__success .dialog__icon {
        color: var(--green);
        background-color: var(--greenish-white);
    }
    .dialog__error .dialog__icon {
        color: var(--red);
        background-color: var(--redish-white);
    }
    .dialog__warning .dialog__icon {
        color: var(--yellow);
        background-color: var(--yellowish-white);
    }
    .dialog__content {
        align-self: stretch;
        min-height: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .dialog__title {
        align-self: stretch;
        color: #27272a;
        font-size: 1.125rem;
        font-weight: 600;
        margin: 5px auto;
        text-align: center;
    }
    .dialog__message {
        align-self: stretch;
        color: #27272a;
        font-size: 0.875rem;
        font-weight: 400;
        text-align: center;
    }
    .dialog__btn-group {
        align-self: stretch;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
    }
    .dialog__btn {
        min-width: 130px;
        border-radius: 0.5rem;
        padding: 0.375rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        font-size: var(--font14);
        font-weight: 600;
        line-height: 1.8;
        color: white;
    }
    .dialog__btn.confirm {
        color: white;
        background-color: var(--blue);
        border: 1px solid var(--blue);
        background-position: center;
        transition: background 0.8s;
    }
    .dialog__btn.success {
        background-color: var(--green);
        border: 1px solid var(--green);
    }
    .dialog__btn.warning {
        background-color: var(--yellow);
        border: 1px solid var(--yellow);
    }
    .dialog__btn.error {
        border: 1px solid var(--red);
        color: var(--red);
        background: white;
    }
    .dialog__btn.error:hover {
        color: var(--red);
        border: 1px solid var(--red);
        background-color: #fff3f3;
    }
    .progress__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        background-color: var(--bluish-white);
        width: 65px;
        height: 65px;
        border-radius: 100px;
    }
    .dialog__loader {
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
        border: 5px solid var(--white);
        border-top: 5px solid var(--blue);
        border-radius: 50%;
        height: 45px;
        width: 45px;
    }

    /* Keyframes for scaling in */
    @keyframes scaleIn {
        0% {
            transform: scale(0.7);
            opacity: 0;
        }
        45% {
            transform: scale(1.05);
            opacity: 1;
        }
        80% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    /* Keyframes for scaling out */
    @keyframes scaleOut {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0.5);
            opacity: 0;
        }
    }

    @-webkit-keyframes spin {
        to {
            border-top-color: var(--blue);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        to {
            border-top-color: var(--blue);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    /* Animation classes */
    .scale-enter-active {
        animation: scaleIn 0.4s ease-out forwards;
    }

    .scale-leave-active {
        animation: scaleOut 0.2s ease-out forwards;
    }
</style>
