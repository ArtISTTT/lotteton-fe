import { createWebHistory, createRouter } from 'vue-router';
import Start from '@/pages/start.vue';
import Home from '@/pages/home.vue';
import Game from '@/pages/game.vue';
import { useAppStore } from '@/stores';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: { authedOnly: true },
  },
  {
    path: '/game',
    component: Game,
    name: 'game',
    meta: { authedOnly: true },
  },
  {
    path: '/start',
    component: Start,
    name: 'start',
    meta: { notAuthedOnly: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, from: any, next: (p?: any) => void) => {
  const { user, authChecked } = useAppStore();

  if (!authChecked) {
    next();

    return;
  }

  if (to.name === 'start' && to.meta.authedOnly) {
    next({ name: 'home' });
  } else if (to.meta.authedOnly) {
    if (!user) {
      next({ name: 'start' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export { router };
