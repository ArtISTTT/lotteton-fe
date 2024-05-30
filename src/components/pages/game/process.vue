<template>
  <div class="process">
    <div class="winning-pairs">
      <div class="title">Winning pairs</div>
      <div class="list">
        <div v-for="index in 5" :key="index" class="winning-pair">
          <span
            :class="{
              show: winningPairs[index - 1],
            }"
            >{{ winningPairs[index - 1] || '' }}</span
          >
        </div>
      </div>
    </div>
    <div class="addresses-list">
      <div
        class="address"
        v-for="(address, index) in addressesWithHighlitePairsHTML"
        :key="index"
      >
        <div class="text" v-html="address.addressHTML" />
        <div class="score">{{ address.score }}</div>
      </div>
    </div>
    <Vue3Lottie
      class="animation"
      :animationData="FightLottie"
      :height="200"
      :width="200"
    />
  </div>
</template>

<script setup name="GameProcess">
import { Vue3Lottie } from 'vue3-lottie';
import Player from '@/components/pages/home/player/index.vue';
import FightLottie from '@/assets/lottie/fight.json';
import { computed, ref } from 'vue';

const winningPairs = ref([]);
const addresses = [
  'EQCbPqgKl9XdfjsdjfiosdfidsFDZGCIZQoOgMcSI__r_9aA',
  'EQCbPqgKlFDJsdfjejfmsdfdsBboZGCIZQoOgMcSI__r_9aA',
  'EQCbPqgKl9XdLPQOKVmvs0yuPBboZGCIZQoOgMcSI__r_9aA',
  'EQCbPqgKl9XdMVmczxMVDSoefmsOSDFkoQoOgMcSI__r_9aA',
];
const addressesWithHighlitePairsHTML = computed(() => {
  console.log(addresses);
  return addresses.map(address => {
    let newAddress = address;
    winningPairs.value.forEach(pair => {
      newAddress = newAddress.replace(pair, `<b>${pair}</b>`);
    });

    console.log(newAddress);

    const score = winningPairs.value.reduce((acc, pair) => {
      return acc + (address.match(new RegExp(pair, 'g')) || []).length;
    }, 0);
    return {
      addressHTML: newAddress,
      score,
    };
  });
});

// make 5 random winning strings like "Kj" with interval 1 second 1 by 1
const makeWinningPairs = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      winningPairs.value.push(
        Math.random().toString(36).substring(2, 4).toUpperCase()
      );
    }, i * 3000);
  }
};

makeWinningPairs();
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
