<template>
  <div> hello </div>
  {{ a }}
  <div v-for="(data, idx) in datas" :key="idx">
    <span style="display: block; margin-bottom: 10px;">{{ data }}</span>
  </div>
  <button @click="()=>{a++;}">aa</button>
</template>

<!-- <script setup lang="ts">
  import {mainStore} from './../stores/main';
  const store = mainStore();
  const data = store.fetchLists();

  console.log(data);

  defineProps<{ msg: string }>()

  watchEffect(() => {
    store.fetchLists().then((res:any) => {
  	  console.log(res);
    })
  });
</script> -->

<script lang="ts">
import {mainStore} from './../stores/main';
// const store = mainStore();

  export default {
    data(){
      return {
        datas : {},
        store: mainStore(),
        a: 0
      }
    },
    mounted(){
      this.store.fetchLists().then((res)=>{
        this.datas = res.data;
      })
    },
    watchEffect : (() => {
      this.store.fetchLists(a).then((res:any) => {
        console.log(res);
      })
    }),
  }
</script>
