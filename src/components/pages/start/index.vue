<template>
  <div class="start">
    <div class="ton-fight">TON FIGHT</div>
    <div class="boss">
      <img class="boss-img" src="@/assets/images/preview1.webp" />
    </div>

    <div class="bottom">
      <button @click="requestWalletConnection" class="connect-button">
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
