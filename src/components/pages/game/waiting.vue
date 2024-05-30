<template>
  <div class="waiting">
    <div class="players-list">
      <Player class="item player-1" />
      <Player class="item player-2" />
      <Player class="item player-3" reverted />
      <Player class="item player-4" reverted unknown />
    </div>
    <div class="actions">
      <button class="back-button" @click="$router.push('/')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
        Cancel search
      </button>
    </div>
    <div class="waiting-wrapper">
      <span>Waiting for players...</span>
      <countdown
        :time="3 * 60 * 1000"
        format="mm:ss"
        class="time-left"
        @finish="$emit('startGame')"
      />
    </div>
  </div>
</template>

<script setup name="GameWaiting">
import Player from '@/components/pages/home/player/index.vue';
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
