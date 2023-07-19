<template>
  <main>
    <Head />
    
    <div class="content-body">
      COUNT : 
      {{ store.count }}
      {{ store.doubleCount }}
      <br/>
      <HelloWorld msg="Vite + Vue" />
    </div>
    <footer>

    </footer>
  </main>

</template>

<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import Head from './components/Head.vue';
  import {mainStore} from './stores/main';
  const store = mainStore();
  
</script>
