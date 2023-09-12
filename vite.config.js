import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/components/index.js', // 你的入口文件路径
      name: 'Relaxing-ui', // 你的库名称
      fileName: (format) => `relaxing-ui.${format}.js` // 打包后的文件名
    },
    rollupOptions: {
      // 此处添加外部依赖项（如 Vue），以避免将其打包进你的库中
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
