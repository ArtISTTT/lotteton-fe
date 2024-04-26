import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import WebApp from '@twa-dev/sdk'

WebApp.ready();

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
