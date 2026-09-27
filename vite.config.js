import { defineConfig } from 'vite'
import { globSync } from 'node:fs'

export default defineConfig({
  build: {
    rollupOptions: {
      input: globSync('{index.html,v1/*.html,v2/*.html}'),
    },
  },
})
