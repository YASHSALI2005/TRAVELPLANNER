import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'Frontend/travel',  // Ensure Vite uses the correct root directory
  plugins: [react()],
  build: {
    outDir: '../../dist',  // Make sure to output to the correct location
    rollupOptions: {
      input: 'Frontend/travel/index.html',  // Ensure this points to your index.html
    }
  },
})
