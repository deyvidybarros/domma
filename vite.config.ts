import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './',  // 👈 MUDE PARA ISSO (com ponto e barra)
})
