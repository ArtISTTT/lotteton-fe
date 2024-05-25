import { createWebHistory, createRouter } from 'vue-router';
import Start from '@/pages/start.vue';
import Home from '@/pages/home.vue';
import Game from '@/pages/game.vue';
import handleAuthRouting from '@/middleware/auth';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: { authRequired: true },
  },
  {
    path: '/game',
    component: Game,
    name: 'game',
    meta: { authRequired: true },
  },
  {
    path: '/start',
    component: Start,
    name: 'start',
    meta: { authNotRequired: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  handleAuthRouting(to, from, next);
});

export default router;