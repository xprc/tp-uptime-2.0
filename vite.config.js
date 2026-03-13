import { defineConfig } from 'vite';
import legacy from "@vitejs/plugin-legacy";
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

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
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
