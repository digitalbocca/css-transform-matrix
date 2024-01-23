import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 8080
  },
  base: 'https://digitalbocca.github.io/css-transform-matrix/',
  build: {
    outDir: 'docs'
  }
})
