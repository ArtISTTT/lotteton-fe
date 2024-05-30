import { type IStore, useAppStore } from '@/stores';
import { Address, client } from '@/utils/ton-access';
import { TonConnectUI } from '@tonconnect/ui';
import { type Store } from 'pinia';
import { ref } from 'vue';
import { Router, useRouter } from 'vue-router';
import { getClient } from '@/utils/ton-access';
import { register } from '@/api/auth';

export const getAddressBalance = async (address: string) => {
  const rawAddress = Address.parseRaw(address);

  if (!client) {
    await getClient();
  }

  return await client.getBalance(rawAddress);
};

export const createTonConnect = async () => {
  const tonConnectUIInstance = new TonConnectUI({
    manifestUrl: import.meta.env.VITE_MANIFEST_URL,
  }) as TonConnectUI;

  await new Promise(resolve => setTimeout(resolve, 500));

  return tonConnectUIInstance;
};

export function useConnectWallet() {
  const connected = ref<boolean>(false);
  const store = useAppStore();
  const router = useRouter();

  const requestWalletConnection = () => {
    if (!store.tonConnectUIInstance) {
      return;
    }

    store.tonConnectUIInstance.modal.open();

    store.tonConnectUIInstance.onStatusChange(async wallet => {
      if (!wallet) {
        return;
      }
      const balance = await getAddressBalance(wallet.account.address);

      const data = await register({
        walletId: wallet.account.address,
      });

      store.user = {
        address: wallet.account.address,
        connectedWallet: wallet,
        tonBalance: balance || BigInt(0),
        skinId: '1',
        ...data,
      };

      router.push({ name: 'home' });
    });
  };

  return {
    connected,
    requestWalletConnection,
  };
}
