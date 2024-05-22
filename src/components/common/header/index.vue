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
                <span>34 500.787</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";

const store = useAppStore();
</script>


<style scoped lang="scss" src="./styles.scss">
</style>
