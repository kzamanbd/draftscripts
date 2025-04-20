<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <button :title="title" class="tip-tap-button">
        <i class="tip-tap-icon" :class="icon"></i>
    </button>
</template>

<style scoped>
    .tip-tap-button {
        overflow: visible;
        padding: 0;
        margin: 0;
        border-style: none;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        text-transform: none;
        overflow-wrap: break-word;
        background-color: transparent;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .tip-tap-icon {
        padding: 0;
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-style: normal;
        line-height: 1.25rem;
        text-align: center;
        overflow-wrap: break-word;
        background-repeat: no-repeat;
        cursor: pointer;
    }
</style>
