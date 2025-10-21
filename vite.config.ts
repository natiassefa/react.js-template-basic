/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: 'es2019', // Transpile optional chaining for react-snap compatibility
    minify: 'terser',
    terserOptions: {
      compress: {
        ecma: 2019
      }
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '3255b0929227.ngrok-free.app'
    ]
  }
})
