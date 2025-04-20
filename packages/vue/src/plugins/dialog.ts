import { createApp } from 'vue';
import type { App } from 'vue';

/**
 * JerpDialog component
 * @example
 * this.$openDialog('Message', { type: 'success' });
 *? use promise to handle the response
 * this.$openDialog('Message', { type: 'confirm' }).then((action) => {
 *    if (action) {
 *       console.log('Confirmed');
 *   }
 * }).catch(() => {
 *   console.log('Rejected');
 * });
 * or composition API
 * import { inject } from 'vue';
 * const openDialog = inject('openDialog');
 * openDialog('Message', { type: 'success' });
 *? use promise to handle the response
 * openDialog('Message', { type: 'confirm' }).then((action) => {
 *    if (action) {
 *       console.log('Confirmed');
 *   }
 * }).catch(() => {
 *   console.log('Rejected');
 * });
 */

import AlertDialog from '@/components/AlertDialog.vue';

const DialogPlugin = {
    install(app: App, options?: any) {
        const dialogInstance = createApp(AlertDialog, options);
        const element = document.createElement('div');
        document.body.appendChild(element);
        const container: any = dialogInstance.mount(element);
        app.provide('openDialog', container.openDialog);
        app.config.globalProperties.$openDialog = container.openDialog;
        app.config.globalProperties.$alert = container.openDialog;
    }
};

export default DialogPlugin;
