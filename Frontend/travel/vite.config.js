import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',  // Relative to this file, so Frontend/travel/
  plugins: [react()],
  build: {
    outDir: '../../dist',  // Output to TRAVELPLANNER/dist/
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',  // Relative to root (Frontend/travel/index.html)
    },
  },
});