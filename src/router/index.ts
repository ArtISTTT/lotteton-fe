import { createWebHistory, createRouter, useRouter } from 'vue-router';
import Start from '@/pages/start.vue';
import Home from '@/pages/home.vue';
import Game from '@/pages/game.vue';
import { useAppStore } from '@/stores';
import { createTonConnect, getAddressBalance } from '@/hooks/useConnectWallet';
import { Wallet } from '@tonconnect/ui';
import { getClient } from '@/utils/ton-access';

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

const processAuthMiddleware = (
  authed: Boolean,
  to: any,
  from: any,
  next: (p?: any) => void
) => {
  console.log(authed, to.meta);
  if (authed && to.meta.notAuthedOnly) {
    next({ name: 'home' });
  } else if (to.meta.authedOnly && !authed) {
    next({ name: 'start' });
  } else {
    next();
  }
};

router.beforeEach(async (to: any, from: any, next: (p?: any) => void) => {
  const store = useAppStore();

  // Process middleware
  if (store.tonConnectUIInstance) {
    processAuthMiddleware(Boolean(store.user), to, from, next);

    return;
  }

  // Creating wallet connection
  await getClient();
  const tonConnectUIInstance = await createTonConnect();

  if (!tonConnectUIInstance.account) {
    next({ name: 'start' });

    return;
  }

  const balance = await getAddressBalance(tonConnectUIInstance.account.address);

  store.tonConnectUIInstance = tonConnectUIInstance;
  store.user = {
    address: tonConnectUIInstance.account.address,
    connectedWallet: tonConnectUIInstance.wallet as Wallet,
    balance: balance || BigInt(0),
    skinId: '1',
  };

  processAuthMiddleware(true, to, from, next);
});

export { router };
