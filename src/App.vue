<template>
  <div>
    COUNT : 
    {{ store.count }}
    {{ store.doubleCount }}
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import {mainStore} from './stores/main';
  const store = mainStore();
  
</script>


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
