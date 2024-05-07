import { createWebHistory, createRouter} from 'vue-router'
import Start from '@/components/pages/start/index.vue'
import Home from '@/components/pages/home/index.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
	{ path: '/start', component: Start, name: 'start' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})