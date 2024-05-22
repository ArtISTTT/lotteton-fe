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

const store = useAppStore();
const router = useRouter();

const onConnectWallter = () => {
    console.log("CONNECT");
    store.user = {
        address: "UQCq_4MKth7bmvzHrGneW6Dz_nlEbB_3Gr8yl46_IRRgVfYD",
        skinId: "1",
    };
    router.push({ name: "home" });
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
