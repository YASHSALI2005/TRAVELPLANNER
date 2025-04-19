import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',  // Relative to Frontend/travel/
  plugins: [react()],
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',  // Should resolve to Frontend/travel/index.html
    },
  },
});