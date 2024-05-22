import { createWebHistory, createRouter} from 'vue-router'
import Start from '@/components/pages/start/index.vue'
import Home from '@/components/pages/home/index.vue'
import Game from '@/components/pages/game/index.vue'
import { useAppStore } from '@/stores'

const routes = [
  { path: '/', component: Home, name: 'home', meta: { authedOnly: true } },
  { path: '/game', component: Game, name: 'game', meta: { authedOnly: true } },
	{ path: '/start', component: Start, name: 'start', meta: {notAuthedOnly: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to: any, from: any, next: (p?: any) => void) => {
  const authStore = useAppStore();

	to

	if (to.name === 'start' && to.meta.authedOnly) {
		next({ name: 'home' });
	} else if (to.meta.authedOnly) {
    if (!authStore.user) {
      next({ name: 'start' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export {
	router
}
