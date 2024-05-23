<template>
    <div class="start">
        <div class="ton-fight">TON FIGHT</div>
        <div class="boss">
            <img class="boss-img" src="@/assets/images/preview1.webp" />
        </div>

        <div class="bottom">
            <button id="ton-connect" class="connect-button"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConnectWallet } from "@/hooks/useConnectWallet";

useConnectWallet();
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
