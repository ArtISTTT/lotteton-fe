<template>
  <div class="home">
    <!-- <GamesTable /> -->
    <Header />
    <Player class="player-item" />
    <PlayButton @click="onFight" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Player from './player/index.vue';
import PlayButton from '@/components/common/play-button/index.vue';
import Header from '@/components/common/header/index.vue';

const router = useRouter();

const onFight = () => {
  router.push({ name: 'game' });
};
</script>

<style scoped lang="scss" src="./styles.scss"></style>
