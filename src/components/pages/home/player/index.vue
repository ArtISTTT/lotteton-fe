<template>
  <div class="player" :class="{ reverted }">
    <!-- <div class="address">{{ store.user.address }}</div> -->
    <img :src="playerImageSrc" class="player-img" />
    <div v-if="unknown" class="unknown">
      <span>?</span>
    </div>
    <Transition v-else>
      <img
        v-if="count < 5"
        src="@/assets/images/wallet.webp"
        class="wallet"
        @click="increment"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';
import { ref } from 'vue';
import { computed } from 'vue';

const count = ref(0);
const props = defineProps({
  reverted: Boolean,
  unknown: Boolean,
});

function increment() {
  count.value++;
}

const store = useAppStore();

const playerImageSrc = computed(() => {
  const skinId = store.user?.skinId || 1;
  return `/assets/images/players/player-${skinId}.webp`;
});
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

