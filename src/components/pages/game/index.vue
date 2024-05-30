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
import { ref } from 'vue';

const isWaiting = ref(true);

const startGame = () => {
  console.log('start game');
  isWaiting.value = false;
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

