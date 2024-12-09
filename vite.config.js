import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});