import { useAppStore } from '@/stores';
import { Address, client } from '@/utils/ton-access';
import { TonConnectUI } from '@tonconnect/ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useConnectWallet(buttonRootId?: string) {
  const connected = ref<boolean>(false);
  const store = useAppStore();
  const router = useRouter();

  const createTonConnect = async () => {
    if (!store.tonConnectUIInstance?.connected) {
      store.tonConnectUIInstance = new TonConnectUI({
        manifestUrl: import.meta.env.VITE_MANIFEST_URL,
        buttonRootId,
      }) as TonConnectUI;
    } else {
      connected.value = true;
    }

    store.tonConnectUIInstance.onStatusChange(async walletInfo => {
      if (!walletInfo) {
        return;
      }

      const address = Address.parseRaw(walletInfo.account.address);
      const balance = await client.getBalance(address);

      store.user = {
        address: walletInfo.account.address,
        connectedWallet: walletInfo,
        balance: balance || BigInt(0),
        skinId: '1',
      };

      router.push({ name: 'home' });
    });
  };

  return {
    connected,
    createTonConnect,
  };
}
