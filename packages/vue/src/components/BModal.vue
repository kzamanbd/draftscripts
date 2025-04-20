<script>
    import { Modal } from 'bootstrap';
    import { defineComponent } from 'vue';

    export default defineComponent({
        inheritAttrs: false,
        props: {
            modelValue: Boolean,
            id: {
                type: String,
                default: () => `modal-${Math.random().toString(36).substring(7)}`
            },
            title: {
                type: String,
                default: 'Modal title'
            },
            hideHeader: {
                type: Boolean,
                default: false
            },
            hideFooter: {
                type: Boolean,
                default: false
            },
            modalClass: String,
            headerClass: String,
            dialogClass: String,
            contentClass: String,
            bodyClass: String,
            footerClass: String,
            centered: {
                type: Boolean,
                default: false
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'md'
            },
            noCloseOnEsc: {
                type: Boolean,
                default: false
            },
            noCloseOnBackdrop: {
                type: Boolean,
                default: false
            },
            okTitle: {
                type: String,
                default: 'OK'
            },
            cancelTitle: {
                type: String,
                default: 'Cancel'
            },
            zIndex: {
                type: [Number, String],
                default: null
            }
        },
        data: () => ({
            modalInstance: null
        }),
        emits: ['show', 'hidden', 'update:modelValue'],
        computed: {
            modalClasses() {
                return ['modal', 'fade', this.modalClass];
            },
            dialogClasses() {
                const modalSize = `modal-${this.size}`;
                const centeredClass = this.centered && 'modal-dialog-centered';
                return [modalSize, centeredClass, this.dialogClass];
            },
            footerClasses() {
                return [this.footerClass, 'modal-footer justify-content-center'];
            },

            attributes() {
                return {
                    ...this.$attrs,
                    'data-bs-backdrop': (this.noCloseOnBackdrop && 'static') || null,

                    style: {
                        zIndex: this.zIndex && `${this.zIndex}`
                    }
                };
            }
        },
        mounted() {
            const modalElement = this.$refs.modalRef;
            Modal.getOrCreateInstance(modalElement).hide();
            modalElement.addEventListener('shown.bs.modal', this.show);
            modalElement.addEventListener('hidden.bs.modal', this.hide);
        },
        beforeUnmount() {
            const modalElement = this.$refs.modalRef;
            modalElement.removeEventListener('shown.bs.modal', this.show);
            modalElement.removeEventListener('hidden.bs.modal', this.hide);
            if (this.modalInstance) {
                this.hide();
            }
        },
        methods: {
            /**
             * Trigger modal show event.
             */
            show() {
                if (this.modalInstance) {
                    return;
                }
                const modalElement = this.$refs.modalRef;
                Modal.getOrCreateInstance(modalElement).show();
                this.modalInstance = Modal.getInstance(modalElement);
                this.$emit('show');
                this.$emit('update:modelValue', true);
            },

            /**
             * Trigger modal hide event.
             */
            hide() {
                const modalElement = this.$refs.modalRef;
                Modal.getOrCreateInstance(modalElement).hide();
                this.modalInstance = null;
                this.$emit('hidden');
                this.$emit('update:modelValue', false);
            },
            toggle() {
                const modalElement = this.$refs.modalRef;

                Modal.getOrCreateInstance(modalElement).toggle();
                this.modalInstance = Modal.getInstance(modalElement);
                this.$emit('update:modelValue', !this.modelValue);
            },
            ok() {
                this.hide();
            }
        },

        watch: {
            modelValue: {
                handler(newVal) {
                    if (newVal) {
                        this.show();
                    } else {
                        this.hide();
                    }
                }
            }
        }
    });
</script>

<template>
    <Teleport to="body">
        <div :id="id" ref="modalRef" :class="modalClasses" v-bind="attributes">
            <div class="modal-dialog" :class="dialogClasses">
                <div v-if="modalInstance" class="modal-content" :class="contentClass">
                    <div v-if="!hideHeader" class="modal-header" :class="headerClass">
                        <slot name="modal-header" :close="hide">
                            <slot name="modal-title">
                                <div class="h5 modal-title" v-text="title" />
                            </slot>
                            <slot name="modal-header-close">
                                <button type="button" class="btn-close" @click="hide" />
                            </slot>
                        </slot>
                    </div>
                    <div class="modal-body" :class="bodyClass">
                        <slot :close="hide" :ok="ok" :cancel="hide" />
                    </div>
                    <div v-if="!hideFooter" :class="footerClasses">
                        <slot name="modal-footer" :cancel="hide" :ok="ok" :close="hide">
                            <slot name="modal-cancel">
                                <button class="btn btn-cancel" @click="hide">
                                    {{ cancelTitle }}
                                </button>
                            </slot>
                            <slot name="modal-ok">
                                <button type="button" class="btn btn-primary" @click="ok">
                                    {{ okTitle }}
                                </button>
                            </slot>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
