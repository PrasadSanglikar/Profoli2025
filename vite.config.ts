import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()], // Use Angular plugin for Vite
  server: {
    hmr: {
      overlay: false, // Prevents UI overlay errors
    }
  },
  optimizeDeps: {
    exclude: ['@angular/core', '@angular/common', '@angular/platform-browser', '@angular/router'] // Ensures Angular dependencies are properly handled
  }
});
