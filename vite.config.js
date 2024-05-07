import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [vue(), basicSsl()],
  base: './',
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
