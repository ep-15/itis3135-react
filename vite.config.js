import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/itis3135-react/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Put the built JavaScript in a scripts/ folder (course standard)
        entryFileNames: 'scripts/[name]-[hash].js',
        chunkFileNames: 'scripts/[name]-[hash].js',
      },
    },
  },
})