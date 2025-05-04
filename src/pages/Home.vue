<script setup lang="ts">
import { ref, onMounted, onUpdate, watch } from 'vue'
import ButtonCustom from '@/components/base/ButtonCustom.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { getDataNews } from '@/services/action.ts'

const router = useRouter()
const baseUrlApi = import.meta.env.VITE_BASE_URL_API
const apiKey = import.meta.env.VITE_PASSKEY_NEWS_API

const newsData = ref([])
const loading = ref(false)

const handleGetData = async () => {
    try {
        loading.value = true
        const fetched = await getDataNews(baseUrlApi, apiKey)
        if (fetched.data.status === 'ok') {
            newsData.value = fetched.data.sources
        } else {
            throw { msg: 'Error Fetch Data!', status: 400 }
        }
    } finally {
        loading.value = false
    }
}

const handleNavigation = () => {
    router.push('/about')
}

onMounted(() => {
    handleGetData()
    console.log('have a nice diddy!');
})

</script>

<template>
    <div class="w-full p-5">
        <ButtonCustom @click="handleNavigation">Button bray</ButtonCustom>
    </div>
</template>