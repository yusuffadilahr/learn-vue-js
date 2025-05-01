<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ButtonCustom from '@/components/base/ButtonCustom.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleAlert = () => {
    alert('trigger btn')
    router.push('/')
}

onMounted(() => {
    console.log('have a nice diddy!');
})

</script>

<template>
    <div class="w-full p-5">
        <ButtonCustom @click="handleAlert">Button bray</ButtonCustom>
    </div>
</template>