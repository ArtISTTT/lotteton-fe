<template>
  <div class="btn-wrapper">
    <div class="time-left" v-if="!canGetDrop">
      <span>Next drop in</span>
      <countdown
        :time="timeLeftForDropMs"
        format="HH:mm:ss"
        class="time-left"
      />
    </div>
    <button
      v-if="canGetDrop"
      class="glowing-btn small"
      @click="$emit('onGetDrop')"
    >
      <span class="glowing-txt">GET +42 durev</span>
    </button>
    <button v-else class="glowing-btn" @click="$emit('onFight')">
      <span class="glowing-txt">F<span class="faulty-letter">I</span>GHT</span>
    </button>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores';
import dayjs from 'dayjs';
import { computed, onMounted, ref, watch, onUnmounted } from 'vue';

const store = useAppStore();
const timeLeftForDropMs = ref(null);
const canGetDrop = ref(false);

const updateTimeLeft = () => {
  if (!store.user || !store.user.nextDrop) return;

  const now = dayjs();
  const nextDropDate = dayjs(store.user.nextDrop);
  const diff = nextDropDate.diff(now);

  if (diff <= 0) {
    timeLeftForDropMs.value = 0;
    canGetDrop.value = true;
  } else {
    timeLeftForDropMs.value = diff;
    canGetDrop.value = false;
  }
};

watch(() => store.user, (newUser) => {
  if (newUser) {
    updateTimeLeft();
  }
}, { immediate: true, deep: true });

onMounted(() => {
  updateTimeLeft();
  const timer = setInterval(updateTimeLeft, 1000);

  onUnmounted(() => {
    clearInterval(timer);
  });
});
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
