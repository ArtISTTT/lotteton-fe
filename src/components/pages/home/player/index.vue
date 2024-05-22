<template>
    <div class="player">
        <div class="address">{{ store.user.address }}</div>
        <img
            :src="`src/assets/images/players/player-${store.user.skinId}.webp`"
        />
    </div>
</template>

<script setup>
import { useAppStore } from "@/stores";

const store = useAppStore();
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

