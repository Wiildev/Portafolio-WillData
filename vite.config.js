import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base: './' permite publicar en https://usuario.github.io/nombre-repo/ sin rutas rotas
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
