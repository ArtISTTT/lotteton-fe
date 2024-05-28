<template>
  <div class="home">
    <!-- <GamesTable /> -->
    <Header />
    <Player class="player-item" />
    <PlayButton @onFight="onFight" @onGetDrop="onGetDrop" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Player from './player/index.vue';
import PlayButton from '@/components/common/play-button/index.vue';
import Header from '@/components/common/header/index.vue';
import { postDailyDrop } from '@/api/drop';
import { useAppStore } from '@/stores';

const router = useRouter();
const store = useAppStore();

const onFight = () => {
  router.push({ name: 'game' });
};

const onGetDrop = async () => {
  if (!store.user) {
    return;
  }

  const data = await postDailyDrop({
    walletId: store.user.address,
  });

  store.user = {
    ...store.user,
    ...data,
  };
};
</script>

<style scoped lang="scss" src="./styles.scss"></style>
