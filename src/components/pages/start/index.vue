<template>
    <div class="start">
        <div class="ton-fight">TON FIGHT</div>
        <div class="boss">
            <img class="boss-img" src="@/assets/images/preview1.webp" />
        </div>

        <div class="bottom">
            <button
                id="ton-connect"
                class="connect-button"
                @click="onConnectWallter()"
            >
                <!-- <img src="@/assets/images/ton.svg" /> -->
                <!-- <div id="ton-connect"></div> -->
                <!-- <div  @click="onConnectWallter()"></div> -->
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";
import { ConnectedWallet, THEME, TonConnectUI } from "@tonconnect/ui";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const store = useAppStore();
const router = useRouter();
const tonConnectUIInstance = ref<TonConnectUI | null>(null);

onMounted(() => {
    tonConnectUIInstance.value = new TonConnectUI({
        manifestUrl:
            "https://firebasestorage.googleapis.com/v0/b/walletfight.appspot.com/o/manifest.json?alt=media&token=6d8c679f-2035-4a41-a2c3-935ef7536aff",
        buttonRootId: "ton-connect",
    }) as TonConnectUI;
});

const onConnectWallter = async () => {
    try {
        if (!tonConnectUIInstance) {
            return;
        }

        let connectedWallet: ConnectedWallet | undefined;

        async function connectToWallet() {
            connectedWallet = await tonConnectUIInstance.value?.connectWallet();

            console.log(connectedWallet);
        }

        // Call the function
        connectToWallet().catch((error) => {
            console.error("Error connecting to wallet:", error);
        });

        if (!connectedWallet) {
            return;
        }

        store.user = {
            address: connectedWallet.account.address,
            connectedWallet,
            tonConnectUIInstance: tonConnectUIInstance.value,
            skinId: "1",
        };

        router.push({ name: "home" });
    } catch (e) {
        alert("Could not connect TON wallet");
    }
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
