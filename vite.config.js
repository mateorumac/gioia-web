import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  ssr: {
    // Bundle these CJS packages into the SSR output so Node ESM can import them
    noExternal: ["react-helmet-async"],
  },
})
