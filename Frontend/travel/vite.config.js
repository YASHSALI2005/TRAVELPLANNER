// Frontend/travel/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './travel', // Set the root to the travel directory
  build: {
    outDir: '../dist', // Adjust output directory if needed
  },
});