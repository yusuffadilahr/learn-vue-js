<script setup lang="ts">
import Carousel from '@/components/section/Carousel.vue'
import ButtonCustom from '@/components/base/ButtonCustom.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleNavigation = () => {
    router.push('/')
}
</script>

<template>
    <div class="w-full p-5 space-y-2">
        <Carousel />
        <ButtonCustom @click="handleNavigation">Back</ButtonCustom>
    </div>
</template>