import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import HomeDashboard from "@/pages/dashboard/HomeDashboard.vue"
import Cookies from 'js-cookie'
import Register from "@/pages/auth/Register.vue"

const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: Home
    },
    {
        path: '/about',
        name: 'Tentang Saya',
        component: About,
        meta: { requiresAuth: true }
    },
    {
        path: '/register',
        name: 'Registrasi',
        component: Register
    },

    /* protected-route */
    {
        path: '/dashboard',
        name: 'Dashboard Admin',
        component: HomeDashboard,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const tokenLocalStrg = localStorage.getItem('token')
    const tokenCookie = Cookies.get('__toks')

    if (to.meta.requiresAuth && !tokenLocalStrg && !tokenCookie) {
        console.log('trigger')
        next({
            path: '/'
        })
    } else {
        next()
    }
})

export default router
