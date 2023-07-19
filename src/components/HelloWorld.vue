<template>
  <button class="rounded-full h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-100 bg-black" @click="store.increment">
    Click me
  </button>
</template>

<script setup lang="ts">
  import {mainStore} from './../stores/main';
  const store = mainStore();

  defineProps<{ msg: string }>()
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
