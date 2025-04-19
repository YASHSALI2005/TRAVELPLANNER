import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'Frontend/travel', // Set the root to the travel folder
  plugins: [react()],
  build: {
    outDir: '../../dist', // Output the build in a parent directory (outside the travel folder)
  },
})
