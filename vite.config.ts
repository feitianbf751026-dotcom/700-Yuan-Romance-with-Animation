import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 使用绝对路径，确保 public 目录下的资源正确加载
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})