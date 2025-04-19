import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'Frontend/travel',  // Ensure that 'travel' folder is the root for Vite
  plugins: [react()],
  build: {
    outDir: '../../dist', // Output build files to the root level, outside of the 'travel' folder
    rollupOptions: {
      input: 'Frontend/travel/index.html', // Explicitly provide the entry HTML file
    }
  },
})
