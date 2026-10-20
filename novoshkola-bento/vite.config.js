import { defineConfig } from 'vite'
import { globSync, cpSync } from 'node:fs'

// Multi-page static build. Pages load assets/js/*.js as classic scripts (so they also open
// straight from disk); the build copies assets/ next to Vite's output unchanged.
export default defineConfig({
  base: './', // relative URLs: dist/ works from any folder or straight from disk
  build: {
    rollupOptions: {
      input: globSync('*.html'),
    },
  },
  plugins: [
    {
      name: 'copy-classic-assets',
      apply: 'build',
      closeBundle() {
        cpSync('assets', 'dist/assets', { recursive: true })
      },
    },
  ],
})
