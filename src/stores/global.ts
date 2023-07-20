import { defineStore } from 'pinia'

export const globalStore = defineStore('globalStore', {
  state: () => ({
    isLoading: false
  }),
  getters: {
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    showLoading(){ this.isLoading = true; },
    hideLoading(){ this.isLoading = false; },
  },
})