import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // On GitHub Pages the site lives at /itis3135-react/. Locally (and on Vercel) it lives at /.
  // GitHub Actions sets GITHUB_ACTIONS automatically, so the right value is picked for you.
  base: process.env.GITHUB_ACTIONS ? '/itis3135-react/' : '/',
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
