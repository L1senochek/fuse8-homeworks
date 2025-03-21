import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': resolve(__dirname, './src/app'),
			'@pages': resolve(__dirname, './src/pages'),
			'@public': resolve(__dirname, '../public'),
			'@shared': resolve(__dirname, './src/shared'),
		},
	},
});
