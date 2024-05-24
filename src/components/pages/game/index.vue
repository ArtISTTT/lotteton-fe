<template>
  <div class="game">
    <Header />
    <div class="players-list">
      <Player class="item player-1" />
      <Player class="item player-2" />
      <Player class="item player-3" reverted />
      <Player class="item player-4" reverted />
    </div>
    <div class="waiting-wrapper">
      <span>Waiting for players...</span>
      <countdown :time="60 * 3 * 1000" format="mm:ss" class="time-left" />
    </div>
  </div>
</template>

<script setup name="Game">
import Player from '@/components/pages/home/player/index.vue';
import Header from '@/components/common/header/index.vue';
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

