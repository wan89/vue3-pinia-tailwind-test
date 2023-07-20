import { defineStore } from 'pinia'
import http from './http'

export const mainStore = defineStore('mainStore', {
  state: () => ({
  }),
  getters: {
  },
  actions: {
    fetchLists(a:Number) {
      console.log("fetchLists ~! " + a);
      return http.get('https://app.wedqueen.com/api/v7/main/display')
    },
  },
})