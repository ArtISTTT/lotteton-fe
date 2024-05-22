import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import WebApp from '@twa-dev/sdk'
import { router } from './router'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import Countdown from 'vue3-countdown'

WebApp.ready();

const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify()

app.use(pinia)
app.use(router)
app.use(vuetify)

app.component(Countdown.name as string, Countdown)

app.mount('#app')

// if (WebApp.initDataUnsafe) {
//     WebApp.MainButton.hide();
// }

