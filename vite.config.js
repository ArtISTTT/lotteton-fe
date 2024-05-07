import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl';
import copy from 'rollup-plugin-copy';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), basicSsl(), vueJsx()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: './docs',
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'src/tonconnect-manifest.json', dest: 'docs' },
          ],
          verbose: true,
          hook: 'writeBundle'
        })
      ]
    },
  }
});
