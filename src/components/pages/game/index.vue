<template>
  <div class="game">
    <Header />
    <Waiting v-if="isWaiting" @startGame="startGame" />
    <Process v-else />
  </div>
</template>

<script setup name="Game">
import Waiting from './waiting.vue';
import Process from './process.vue';
import Header from '@/components/common/header/index.vue';

const isWaiting = true;

const startGame = () => {
  isWaiting = false;
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

