import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: 'none'
})

app.mount('#app')
