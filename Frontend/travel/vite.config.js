import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'Frontend/travel',  // Correct root for Vite
  plugins: [react()],
  build: {
    outDir: '../../dist', // Ensure the output is placed correctly
    rollupOptions: {
      input: 'Frontend/travel/index.html', // Ensure this points to your correct index.html
    }
  },
})
