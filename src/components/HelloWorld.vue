<script setup lang="ts">
  import {mainStore} from './../stores/main';
  const store = mainStore();

  defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
<button class="rounded-full" @click="store.increment">
  Click me
</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
