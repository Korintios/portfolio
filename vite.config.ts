import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@icons': '/src/assets/icons',
      '@images': '/src/assets/images',
      '@videos': '/src/assets/videos',
    }
  }
})
