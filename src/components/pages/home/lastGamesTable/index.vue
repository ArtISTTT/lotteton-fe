<template>
    <div class="table-wrapper">
        <VDataTable :items="items" :options="{}" class="table">
            <template v-slot:bottom></template>
        </VDataTable>
    </div>
</template>

<script setup>
import { VDataTable } from "vuetify/lib/components/index.mjs";
const items = [
    {
        won: "332 TON",
        ago: "3 min",
        address: "JFjfksoefksifkfpos...",
    },
];
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

