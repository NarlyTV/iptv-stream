import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/iptv-stream/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'StreamOS IPTV',
        short_name: 'StreamOS',
        description: 'Blazing-fast Minimalist IPTV Player',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        categories: ['entertainment', 'video'],
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/860/860368.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/512/860/860368.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
