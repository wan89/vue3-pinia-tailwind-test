<template>
  <nav class="flex flex-row box-content h-8 w-100 p-4 border-b space-x-3">
    <template v-for="(item, idx) in navList" :key="idx">
      <div :class="'basis-1/4 box-border text-center border border-slate-700 '+((currentTarget == item.targetName)? 'bg-yellow-400' : '')">
        <router-link :to='item.routeLink'>{{ item.name }}</router-link>
      </div>
    </template>
  </nav>
</template>
<script lang="ts">
  import { useRoute } from 'vue-router'

  export default {
    data(){
      return {
        navList: [
          {name: 'main', targetName: 'main', routeLink:'/'},
          {name: 'Two', targetName: 'two', routeLink:'/two'},
          {name: 'Three', targetName: 'three', routeLink:'/three'},
          {name: 'Four', targetName: 'four', routeLink:'/'}
        ],
        currentTarget: ''
      }
    },
    computed: {},
    watch:{
        $route(to:any, from){
          console.log(from);
          this.currentTarget = to.name;
        }
    },
    setup() {
      console.log(useRoute().path);
    },
    methods: {
    }
  }
</script>
