import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), viteStaticCopy({
        targets: [
            {
                src: 'src/assets/images/**/*',
                dest: 'assets/images'
            }
        ]
    })],
  css: {
    postcss: {
          plugins: [tailwindcss()],

      },
    },
    assetsInclude: ['**/*.JPG','**/*.PNG'],
})
