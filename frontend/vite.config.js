import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Permite el acceso desde la red local (útil para pruebas)
    port: 3000,      // Especifica el puerto para evitar conflictos
    strictPort: true // Falla si el puerto está en uso, en lugar de buscar otro
  },
});
