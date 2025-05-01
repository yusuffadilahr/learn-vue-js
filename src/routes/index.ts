import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
