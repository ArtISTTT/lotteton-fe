<template>
  <slot v-if="store.authChecked" />
</template>

<script setup>
import { useConnectWallet } from '@/hooks/useConnectWallet';
import { useAppStore } from '@/stores';
import { getClient, client } from '@/utils/ton-access';
import { onMounted } from 'vue';

const { createTonConnect } = useConnectWallet();
const store = useAppStore();

onMounted(async () => {
  console.log('LAYOUT', store.authChecked);

  if (!client) {
    await getClient();
  }

  if (!store.authChecked) {
    await createTonConnect();
    store.authChecked = true;
  }
});
</script>