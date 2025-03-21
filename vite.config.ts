import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Puedes cambiar el puerto si lo necesitas
    open: true, // Abre el navegador automáticamente
  },
  resolve: {
    alias: {
      '@': '/src', // Opcional: Crea un alias para la carpeta src
    },
  },
});