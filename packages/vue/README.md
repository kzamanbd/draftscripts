# DraftScripts Node.js Library e.g. (Vue, React, Angular, Vanilla JS, etc.)

A customizable Vue.js dialog component library with support for success, error, warning, and confirmation dialogs.

[View Demo](https://draftscripts-vue.vercel.app/)

[![NPM Version](https://img.shields.io/npm/v/@draftscripts/vue)](https://www.npmjs.com/package/@draftscripts/vue)
[![Download](https://img.shields.io/npm/dm/@draftscripts/vue)](https://www.npmjs.com/package/@draftscripts/vue)
[![Stars](https://img.shields.io/github/stars/kzamanbd/node-draftscripts.svg?style=flat-square)](https://github.com/kzamanbd/draftscripts/stargazers)
[![LICENSE](https://img.shields.io/npm/l/@draftscripts/vue)](https://github.com/kzamanbd/draftscripts/blob/master/packages/vue/LICENSE)

## Explore the documentation

## Features

- Customizable dialog types: success, error, warning, and confirm.
- Supports both options API and composition API.
- Promise-based API for handling user responses.
- Customizable CSS class names for styling flexibility.
- Built with Vite for fast and modern development.

## Installation

Install the plugin using npm:

```sh
npm install @draftscripts/vue
```

Or using yarn:

```sh
yarn add @draftscripts/vue
```

## Usage

### Register the Plugin

In your main application file (e.g., main.js or main.ts), register the plugin:

```js
import { createApp } from 'vue';
import App from './App.vue';
import { DialogPlugin } from '@draftscripts/vue';

const app = createApp(App);

const options = {
    // Custom options here
};

app.use(DialogPlugin, options);

app.mount('#app');
```

### Options API Example

To open a dialog using the Options API:

```js
export default {
    methods: {
        showDialog() {
            this.$openDialog('Message', { type: 'success' });
        },
        showConfirmDialog() {
            this.$openDialog('Message', { type: 'confirm' })
                .then((action) => {
                    if (action) {
                        console.log('Confirmed');
                    }
                })
                .catch(() => {
                    console.log('Rejected');
                });
        }
    }
};
```

### Composition API Example

To open a dialog using the Composition API:

```js
import { inject } from 'vue';

export default {
    setup() {
        const openDialog = inject('openDialog');

        const showDialog = () => {
            openDialog('Message', { type: 'success' });
        };

        const showConfirmDialog = () => {
            openDialog('Message', { type: 'confirm' })
                .then((action) => {
                    if (action) {
                        console.log('Confirmed');
                    }
                })
                .catch(() => {
                    console.log('Rejected');
                });
        };

        return {
            showDialog,
            showConfirmDialog
        };
    }
};
```
