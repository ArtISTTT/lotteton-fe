import { useAppStore } from '@/stores';
import { Address, client } from '@/utils/ton-access';
import { ConnectedWallet, TonConnectUI } from '@tonconnect/ui';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export function useConnectWallet() {
	const tonConnectUIInstance = ref<TonConnectUI | null>(null);
	const store = useAppStore()
	const router = useRouter()

	onMounted(async () => {
			tonConnectUIInstance.value = new TonConnectUI({
					manifestUrl: import.meta.env.VITE_MANIFEST_URL,
					buttonRootId: "ton-connect",
			}) as TonConnectUI;

			tonConnectUIInstance.value.onStatusChange(
				async walletInfo => {
							if (!walletInfo) {
								return
							}

							const address = Address.parseRaw(walletInfo.account.address)
							const balance = await client.getBalance(address);

							store.user = {
								address: walletInfo.account.address,
								connectedWallet: walletInfo,
								balance: balance || BigInt(0),
								skinId: "1",
							};

							router.push({ name: "home" });
							
					} 
			);
	});

  return {
		tonConnectUIInstance,
	};
}