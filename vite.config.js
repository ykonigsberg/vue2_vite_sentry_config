// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
//   resolve: {
//     alias: {
//       '@sentry/integrations': path.resolve(__dirname, 'node_modules/@sentry/integrations'),
//     }
//   },
//   optimizeDeps: {
//     include: ['@sentry/integrations']
//   }
})
