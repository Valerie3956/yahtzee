import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isDevEnv = false

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/Tests/setup.js'
  },
  server: {
    proxy: {
      '/auth': {
        target: !isDevEnv? "https://yahtzee-8yzs.onrender.com/" : 'http://127.0.0.1:9000',
        changeOrigin: true,
        secure: false,
      },
      '/leaderboard': {
        target: !isDevEnv? "https://yahtzee-8yzs.onrender.com/" : 'http://127.0.0.1:9000',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: !isDevEnv? "https://yahtzee-8yzs.onrender.com/" : 'http://127.0.0.1:9000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});