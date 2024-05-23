<template>
    <div class="header">
        <div class="left">
            <div class="name">Address</div>
            <div class="value">
                {{ store.user?.address || "AAAAAAAAAAAAAAAAAAAAAA" }}
            </div>
        </div>
        <div class="right">
            <div class="name">Balance</div>
            <div class="value">
                <img src="@/assets/images/coin.webp" class="coin" />
                <span>{{
                    parseBalance(store.user?.balance ?? BigInt(0))
                }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";
import { parseBalance } from "@/utils/parse-balance";

const store = useAppStore();
</script>


<style scoped lang="scss" src="./styles.scss">
</style>
