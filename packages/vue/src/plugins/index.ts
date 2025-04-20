import type { App, Plugin } from 'vue';

import Dialog from './dialog';
import AlertDialog from '@/components/AlertDialog.vue';
import TipTapEditor from '@/components/TipTapEditor.vue';

const DialogPlugin: Plugin = {
    install(app: App, options?: any) {
        // Register components
        app.component('AlertDialog', AlertDialog);
        app.component('TipTapEditor', TipTapEditor);

        app.use(Dialog, options);
    }
};

export { DialogPlugin, AlertDialog, TipTapEditor };
