<template>
    <div class="home">
        <!-- <GamesTable /> -->
        <Header />
        <Player class="player-item" />
        <PlayButton />
    </div>
</template>

<script setup>
import Player from "./player/index.vue";
import GamesTable from "./lastGamesTable/index.vue";
import PlayButton from "@/components/common/play-button/index.vue";
import Header from "@/components/common/header/index.vue";
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

