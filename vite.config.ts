import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // publicPath: process.env.NODE_ENV === "dev" ? "/" : "/dist",
  // devServer: {
  //     proxy: process.env.VUE_APP_PROCXY_SET != ''? process.env.VUE_APP_PROCXY_SET : null,
  //     headers: { "Access-Control-Allow-Origin": "*" },
  // },
  resolve: {
      alias: {
          '@': path.resolve(__dirname, './src')
      }
  },
  plugins: [vue()],
})