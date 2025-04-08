<template>
    <div class="flex flex-col h-screen p-5 justify-center items-center">
        <div class="flex">
            <button
                type="button"
                @click="handleClick('confirm')"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-hidden focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Confirm
            </button>
            <button
                type="button"
                @click="handleClick('success')"
                class="text-white bg-green-700 hover:bg-green-800 focus:outline-hidden focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Success
            </button>
            <button
                type="button"
                @click="handleClick('error')"
                class="text-white bg-red-700 hover:bg-red-800 focus:outline-hidden focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Error
            </button>
            <button
                type="button"
                @click="handleClick('warning')"
                class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-hidden focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                Yellow
            </button>
        </div>
        <TipTapEditor v-model="content" />
    </div>
</template>

<script setup>
    import { TipTapEditor } from '@draftscripts/vue';
    import { inject, ref } from 'vue';
    const openDialog = inject('openDialog');

    const content = ref(
        `<h1>Hello World!</h1><p>TipTap is a rich-text editor framework for Vue.js. It's a set of components and utils for building rich-text editors with TipTap.</p>`
    );

    const handleClick = async (type) => {
        await openDialog('Hello World!', {
            type: type
        });
    };
</script>
