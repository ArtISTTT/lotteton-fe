<template>
  <div class="btn-wrapper">
    <div class="time-left">
      <span>Next drop in</span>
      <countdown
        v-if="timeLeftForDropMs !== 0"
        :time="timeLeftForDropMs"
        format="HH:mm:ss"
        class="time-left"
      />
    </div>
    <button class="glowing-btn" @click="$emit('click')">
      <span class="glowing-txt">F<span class="faulty-letter">I</span>GHT</span>
    </button>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores';
import dayjs from 'dayjs';
import { computed } from 'vue';

const { user } = useAppStore();

const timeLeftForDropMs = computed(() => {
  // lastDailyDrop is a dayjs when i got last drop. Drop can be done onse per 24 hours
  const lastDailyDrop = user.lastDailyDrop;
  const now = dayjs();

  if (!lastDailyDrop) {
    return 0;
  }

  const diff = now.diff(lastDailyDrop, 'millisecond');
  const timeLeft = 24 * 60 * 60 * 1000 - diff;

  console.log(timeLeft);

  return timeLeft > 0 ? timeLeft : 0;
});
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
