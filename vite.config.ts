import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const here = (p: string) => decodeURIComponent(new URL(p, import.meta.url).pathname);

// Relative base + HashRouter = deploys to any static host (GitHub Pages, Netlify, Cloudflare Pages) with no config.
export default defineConfig({
  base: './',
  resolve: {
    alias: [
      // EditorialUI's EdIcon imports every lucide icon to look names up at runtime (~1 MB). Swap in the app's
      // version, which resolves names from src/lib/iconRegistry.ts. Its styles come from the original module.
      { find: /^.*\/EdIcon\/EdIcon\.js$/, replacement: here('./src/lib/EdIconShim.tsx') },
      { find: '@ed-icon-styles', replacement: here('./node_modules/editorial-ui/dist/components/EditorialUI/EdIcon/EdIcon.module.js') },
    ],
  },
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
      workbox: { maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] },
      manifest: {
        name: 'Apologetics Trainer',
        short_name: 'Apologetics',
        description: 'Learn to give a reason for the hope that is in you (1 Peter 3:15).',
        theme_color: '#f8fafd',
        background_color: '#f8fafd',
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
