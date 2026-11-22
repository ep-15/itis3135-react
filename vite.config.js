import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite puts the built app script at the end of <head>. The course validators need the Accumulus
// script (lint.page) to be the last thing in <head> and the standards-check script the last thing
// in <body>, so this moves the app script into <body>, just before standards-check.
function appScriptToBody() {
  return {
    name: 'app-script-to-body',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const app = html.match(/[ \t]*<script type="module"[^>]*><\/script>\n?/)
        if (!app) return html
        const withoutApp = html.replace(app[0], '')
        return withoutApp.replace(/([ \t]*<script src="https:\/\/divonbriesen)/, app[0] + '$1')
      },
    },
  }
}

export default defineConfig({
  // On GitHub Pages the site lives at /itis3135-react/. Locally (and on Vercel) it lives at /.
  // GitHub Actions sets GITHUB_ACTIONS automatically, so the right value is picked for you.
  base: process.env.GITHUB_ACTIONS ? '/itis3135-react/' : '/',
  plugins: [react(), appScriptToBody()],
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
