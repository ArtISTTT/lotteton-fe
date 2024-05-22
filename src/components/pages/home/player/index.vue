<template>
    <div class="player">
        <!-- <div class="address">{{ store.user.address }}</div> -->
        <img
            :src="`src/assets/images/players/player-${store.user.skinId}.webp`"
            class="player-img"
            @click="increment"
        />
        <img
            v-if="count > 5"
            src="@/assets/images/wallet.webp"
            class="wallet"
        />
    </div>
</template>

<script setup>
import { useAppStore } from "@/stores";
import { ref } from "vue";

const count = ref(0);

function increment() {
    count.value++;
}

const store = useAppStore();
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

