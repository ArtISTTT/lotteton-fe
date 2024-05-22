<template>
    <div class="table-wrapper">
        <VDataTable
            :headers="headers"
            :items="items"
            :options="{}"
            class="table"
        >
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

const headers = [
    {
        title: "Won amount",
        align: "left",
        sortable: false,
        key: "won",
    },
    {
        title: "Date",
        ago: "left",
        sortable: false,
        key: "ago",
    },
    {
        title: "Address",
        align: "left",
        sortable: false,
        key: "address",
    },
];
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

