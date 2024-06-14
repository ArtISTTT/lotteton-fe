<template>
  <div class="btn-wrapper">
    <button
      class="small orange zilla-slab-medium"
      :class="{ disabled: !canGetDrop || isGetDropBtnDisabled }"
      @click="onGetDrop"
    >
      <template v-if="canGetDrop">
        <span>GET +42 durev</span>
      </template>
      <template v-else>
        <span>Next drop in</span>
        <countdown
          :time="timeLeftForDropMs"
          format="HH:mm:ss"
          class="time-left"
        />
      </template>
    </button>
    <button class="orange zilla-slab-medium" @click="$emit('onFight')">
      <span >F<span>I</span>GHT</span>
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
const isGetDropBtnDisabled = ref(false);

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

const onGetDrop = async () => {
  isGetDropBtnDisabled.value = true
  await store.getDrop()
  isGetDropBtnDisabled.value = false
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
