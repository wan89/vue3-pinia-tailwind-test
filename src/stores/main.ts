import { defineStore } from 'pinia'
import axios from 'axios'

export const mainStore = defineStore('mainStore', {
  state: () => ({
    isLoading: false
  }),
  getters: {
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    showLoading(){ this.isLoading = true; },
    hideLoading(){ this.isLoading = false; },
    // 
    fetchLists(a:Number) {
      console.log("fetchLists ~!"+a);
      return axios.get('https://app.wedqueen.com/api/v7/main/display')
    },
  },
})