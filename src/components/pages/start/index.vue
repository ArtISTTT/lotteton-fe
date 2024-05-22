<template>
    <div class="start">
        <div class="ton-fight">TON FIGHT</div>
        <div class="boss">
            <img class="boss-img" src="@/assets/images/preview1.webp" />
        </div>

        <div class="bottom">
            <button class="connect-button">
                <img src="@/assets/images/ton.svg" />
                <div @click="onConnectWallter()">Connect Wallet</div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from "@/stores";
import { useRouter } from "vue-router";
import { TonClient } from "@twa-dev/sdk";

const store = useAppStore();
const router = useRouter();

const onConnectWallter = async () => {
    try {
        const client = new TonClient({
            endpoint: "https://toncenter.com/api/v2/jsonRPC",
        });

        const provider = await client.wallet.createWalletProvider();
        const walletAddress = await provider.getAddress();

        store.user = {
            address: walletAddress,
            skinId: "1",
        };

        console.log("ADDRESS: ", walletAddress);

        router.push({ name: "home" });
    } catch (e) {
        alert("Could not connect TON wallet");
    }
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
