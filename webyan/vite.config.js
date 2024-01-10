import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://120.55.181.128:80',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 如果后端接口不需要 '/api' 前缀，可以将其重写为空
        }
      }
    }
  }
})
