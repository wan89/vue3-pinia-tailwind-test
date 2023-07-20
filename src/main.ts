import { createApp } from 'vue'
import {createPinia} from 'pinia'
import routers from '@/router/index.js';
import '@/style.css'
import App from '@/App.vue'

const app = createApp(App);
const pinia = createPinia()

app.use(pinia)
.use(routers)
.mount('#app');
