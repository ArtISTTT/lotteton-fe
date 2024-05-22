<template>
    <div class="player" :class="{ reverted }">
        <!-- <div class="address">{{ store.user.address }}</div> -->
        <img
            :src="`src/assets/images/players/player-${store.user.skinId}.webp`"
            class="player-img"
        />
        <Transition>
            <img
                v-if="count < 5"
                src="@/assets/images/wallet.webp"
                class="wallet"
                @click="increment"
            />
        </Transition>
    </div>
</template>

<script setup>
import { useAppStore } from "@/stores";
import { ref } from "vue";

const count = ref(0);
const props = defineProps({
    reverted: Boolean,
});

function increment() {
    count.value++;
}

const store = useAppStore();
</script>

<style scoped lang="scss" src="./styles.scss">
</style>

