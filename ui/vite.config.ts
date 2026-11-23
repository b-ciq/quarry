/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import {
  FONT_ASSETS_URL_PATH,
  fontAssetsDir,
} from '@ctrliq/quantic-fonts/assets-dir'

const API = 'http://127.0.0.1:8787'

// Builds into the Python package so `quarry ui` serves it without node.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    // Quantic fonts must be served at /assets (see quantic-setup playbook).
    viteStaticCopy({
      targets: [
        { src: `${fontAssetsDir}/*`, dest: FONT_ASSETS_URL_PATH.replace(/^\//, '') },
      ],
    }),
  ],
  build: { outDir: '../src/quarry/ui/static', emptyOutDir: true },
  server: {
    proxy: { '/api': API, '/thumbs': API, '/files': API, '/assets': API },
  },
  test: { environment: 'node' },
})
