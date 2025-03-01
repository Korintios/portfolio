import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@icons': '/src/assets/icons',
      '@images': '/src/assets/images',
      '@videos': '/src/assets/videos',
    }
  }
})
