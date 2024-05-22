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

<script setup>
import { useAppStore } from "@/stores";
import { TonConnectUI } from "@tonconnect/ui";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const store = useAppStore();
const router = useRouter();
const tonConnectUIInstance = reactive();

onMounted(() => {
    tonConnectUIInstance = new TonConnectUI({
        manifestUrl:
            "https://firebasestorage.googleapis.com/v0/b/walletfight.appspot.com/o/manifest.json?alt=media&token=6d8c679f-2035-4a41-a2c3-935ef7536aff",
        buttonRootId: "ton-connect",
    });
});

const onConnectWallter = async () => {
    try {
        if (!tonConnectUIInstance) {
            return;
        }

        async function connectToWallet() {
            const connectedWallet = await tonConnectUIInstance.connectWallet();

            console.log(connectedWallet);
        }

        // Call the function
        connectToWallet().catch((error) => {
            console.error("Error connecting to wallet:", error);
        });

        router.push({ name: "home" });
    } catch (e) {
        alert("Could not connect TON wallet");
    }
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
