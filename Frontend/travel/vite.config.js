import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'Frontend/travel', // Set the root to the travel folder where index.html is located
  plugins: [react()],
  build: {
    outDir: '../dist', // Adjust the output directory as needed
    rollupOptions: {
      input: 'Frontend/travel/index.html', // Specify the correct entry HTML file
    }
  },
})
