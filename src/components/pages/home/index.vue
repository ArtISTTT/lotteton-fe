<template>
    <div class="home">
        <GamesTable />
        <Player class="player-item" />
        <div>Fight!</div>
    </div>
</template>

<script setup>
import Player from "./player/index.vue";
import GamesTable from "./lastGamesTable/index.vue";
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

