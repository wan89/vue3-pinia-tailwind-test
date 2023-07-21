<template>
  <div class="flex flex-wrap">
    <div v-for="(data, idx) in datas" :key="idx" class="w-20 m-5 cursor-pointer hover:bg-sky-700 hover:text-sky-200 text-center p-3">
      <span class="space-x-3">
        <img :src="data.icon" />
        {{ data.categoryName }}
        {{ data.count }}
      </span>
    </div>
  </div>
  <button class="rounded-md bg-red-400 p-2 w-full" @click="appendA">{{ a }}</button>
</template>

<script lang="ts" setup>
  import { mainStore } from './../stores/main';
  import { ref, watchEffect, onUpdated, onMounted, Ref} from 'vue';
  import {CategoryItem} from '@/types/ICategoryItem'

  const store = mainStore();
  let datas:Ref<CategoryItem[]> = ref([]);
  let a = ref(0);

  const appendA = () => {
    a.value++;
  }

  onUpdated(()=> {
    console.log("!! hello !!");
  });

  onMounted(() => {});

  watchEffect(() => {
    store.fetchLists(a.value).then((res:any) => {
      console.log("!!!",res.data);
      datas.value = res.data as Array<CategoryItem>
    })
  });
</script>
