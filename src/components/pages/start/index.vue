<template>
  <div class="start">
    <div class="top">
      <img class="top-img" src="@/assets/images/log-in-image.jpeg" />
    </div>

    <div class="info zilla-slab-medium">
      <h1>Wallet battle</h1>
      <h3>First and honest TON network game</h3>
    </div>

    <div class="bottom">
      <button @click="requestWalletConnection" class="orange zilla-slab-medium">
        <img src="@/assets/images/ton.svg" />
        <div>Connect Wallet</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConnectWallet } from '@/hooks/useConnectWallet';

const { requestWalletConnection } = useConnectWallet();
</script>

<style scoped lang="scss" src="./styles.scss"></style>
