import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import DialogPlugin from './plugins/dialog';

createApp(App).use(DialogPlugin).mount('#app');
