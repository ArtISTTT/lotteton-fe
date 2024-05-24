<template>
  <div class="start">
    <div class="ton-fight">TON FIGHT</div>
    <div class="boss">
      <img class="boss-img" src="@/assets/images/preview1.webp" />
    </div>

    <div class="bottom">
      <button id="ton-connect" class="connect-button"></button>
    </div>
  </div>
</template>

<script setup>
import { useConnectWallet } from '@/hooks/useConnectWallet';
import { useAppStore } from '@/stores';

const { createTonConnect } = useConnectWallet();
const store = useAppStore();

onMounted(async () => {
  console.log('createTonConnect');
  if (!store.connected) {
    await createTonConnect('ton-connect');
  }
});
</script>

<style scoped lang="scss" src="./styles.scss"></style>
