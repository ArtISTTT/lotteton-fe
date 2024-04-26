<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import WebApp from "@twa-dev/sdk";
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="log o vue" alt="Vue logo" />
        </a>
        <div className="card">
            <button @click="WebApp.showAlert(`ТЫ ЕБАНАТ`)">
                Нажми, хули смотришь?
            </button>
        </div>
    </div>
    <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
