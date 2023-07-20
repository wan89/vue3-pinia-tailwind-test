<template>
  <div class="flex flex-wrap">
    <div v-for="(data, idx) in datas" :key="idx" class="w-20 m-5 cursor-pointer hover:bg-sky-700 hover:text-sky-200 text-center p-3">
      <span class="space-x-3">
        <img :src="data.icon" />
        {{ data.categoryName }}
      </span>
    </div>
  </div>
  <button class="rounded-md bg-red-400 p-2 w-full" @click="appendA">{{ a }}</button>
</template>

<script lang="ts" setup>
  import { mainStore } from './../stores/main';
  import { ref, watchEffect } from 'vue';

  const store = mainStore();
  
  let datas = ref({});
  let a = ref(0);

  const appendA = () => {
    a.value++;
  }

  watchEffect(() => {
    store.fetchLists(a.value).then((res:any) => {
      console.log("!!!",res);
      datas.value = res.data;
    })
  });
</script>
