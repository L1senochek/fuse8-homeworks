import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': resolve(__dirname, './src/app'),
			'@routes': resolve(__dirname, './src/routes'),
			'@pages': resolve(__dirname, './src/pages'),
			'@public': resolve(__dirname, '../public'),
			'@assets': resolve(__dirname, './src/assets'),
			'@shared': resolve(__dirname, './src/shared'),
		},
	},
});
