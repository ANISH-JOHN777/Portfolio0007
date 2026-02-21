import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 30000,
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('components/Game')) {
            return 'game';
          }
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'max-age=3600',
    },
  },})