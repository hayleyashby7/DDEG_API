import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [react(), eslint()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
	},
});
