import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Debugging log
console.log('Vite config loaded!');

export default defineConfig({
  root: 'Frontend/travel',
  plugins: [react()],
  build: {
    outDir: '../../dist',
    rollupOptions: {
      input: 'Frontend/travel/index.html',
    }
  },
})
