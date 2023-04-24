import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
// eslint-disable-next-line import/no-extraneous-dependencies
import tailwindcss from 'tailwindcss';

export default defineConfig({
    base: '/DDEG/',
    plugins: [react(), eslint(), tailwindcss()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.js'],
    },
});
