<template></template>

<script setup>
import { useAppStore } from "@/stores";

const store = useAppStore();

const onConnectWallter = () => {
    store.user = {
        address: "UQCq_4MKth7bmvzHrGneW6Dz_nlEbB_3Gr8yl46_IRRgVfYD",
        skinId: "1",
    };
};
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
