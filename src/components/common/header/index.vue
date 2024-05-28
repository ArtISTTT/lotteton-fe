<template>
  <div class="header">
    <div class="left">
      <!-- <div class="name">Address</div> -->
      <div class="value">
        {{ formattedAddress }}
      </div>
    </div>
    <div class="right">
      <!-- <div class="name">Balance</div> -->
      <div class="value">
        <img src="@/assets/images/coin.webp" class="coin" />
        <span>{{ store.user?.balance || 0 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores';
import { Address } from '@/utils/ton-access';

const store = useAppStore();

const formattedAddress = computed(() => {
  if (store.user?.address) {
    return Address.parseRaw(store.user.address).toString();
  }

  return '-';
});
</script>

<style scoped lang="scss" src="./styles.scss"></style>
