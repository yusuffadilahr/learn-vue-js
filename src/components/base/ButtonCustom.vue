<template>
    <button :class="`px-4 py-2 ${textSize} rounded-xl text-white ${colorBtn}
    hover:bg-neutral-500`">
        <slot>{{ captionBtn }}</slot>
    </button>
</template>

<script setup lang="ts">
const { textSize = 'text-sm', colorBtn = 'bg-neutral-800', captionBtn = 'default caption' } = defineProps<{
    textSize?: string
    colorBtn?: string
    captionBtn?: string
}>()

</script>