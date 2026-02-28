import { defineConfig } from 'vite';
import legacy from "@vitejs/plugin-legacy";
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: [
        'cover 99% in CN',
        'not dead',
        'not op_mini all',
      ],
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
