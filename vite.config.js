import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Sajten ligger under https://youabd123.github.io/pinchers-barbershop/
  base: '/pinchers-barbershop/',
  plugins: [react()],
})
