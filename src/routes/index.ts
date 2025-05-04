import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: Home
    },
    {
        path: '/about',
        name: 'Tentang Saya',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
