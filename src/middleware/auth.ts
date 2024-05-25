import { useAppStore } from '@/stores';
import { createTonConnect, getAddressBalance } from '@/hooks/useConnectWallet';
import { Wallet } from '@tonconnect/ui';
import { getClient } from '@/utils/ton-access';

const handleAuthRouting = async (to: any, from: any, next: (p?: any) => void) => {
  const store = useAppStore();

  if (store.tonConnectUIInstance) {
    handleRouteGuard(Boolean(store.user), to, from, next);
    return;
  }

  await getClient();
  const tonConnectUIInstance = await createTonConnect();
  store.tonConnectUIInstance = tonConnectUIInstance;
  if (!tonConnectUIInstance.account) {
    next({ name: 'start' });
    return;
  }
  const balance = await getAddressBalance(tonConnectUIInstance.account.address);

  store.user = {
    address: tonConnectUIInstance.account.address,
    connectedWallet: tonConnectUIInstance.wallet as Wallet,
    balance: balance || BigInt(0),
    skinId: '1',
  };

  handleRouteGuard(true, to, from, next);
};

const handleRouteGuard = (
  isAuthenticated: Boolean,
  to: any,
  from: any,
  next: (p?: any) => void
) => {
  if (to.meta.authNotRequired && isAuthenticated) {
    next({ name: 'home' });
  } else if (to.meta.authRequired && !isAuthenticated) {
    next({ name: 'start' });
  } else {
    next();
  }
};

export default handleAuthRouting;