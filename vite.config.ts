import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Relative base + HashRouter = deploys to any static host (GitHub Pages, Netlify, Cloudflare Pages) with no config.
export default defineConfig({
  base: './',
  test: { include: ['src/**/*.test.ts'] },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // Lesson text is most of the download. Keeping it in its own files means a code change does not force
        // every reader to fetch all the lessons again, and no single file grows past what the service worker caches.
        manualChunks(id) {
          if (id.includes('/src/content/islam/sects/')) return 'lessons-subtracks';
          if (id.includes('/src/content/islam/')) return 'lessons-islam';
          if (id.includes('/src/content/topics/')) return 'lessons-foundations';
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      workbox: { maximumFileSizeToCacheInBytes: 4 * 1024 * 1024 },
      manifest: {
        name: 'Apologetics Trainer',
        short_name: 'Apologetics',
        description: 'Learn to give a reason for the hope that is in you (1 Peter 3:15).',
        theme_color: '#1f3a5f',
        background_color: '#f7f5f0',
        display: 'standalone',
        start_url: './',
        scope: './',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
});
