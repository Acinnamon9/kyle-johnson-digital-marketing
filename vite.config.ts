
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
            'next/link': path.resolve(__dirname, './src/shim-next-link.tsx'),
        },
    },
    define: {
        'process.env': {}, // Shim process.env for some libs that might expect it
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/widget.tsx'),
            name: 'ReactWidget',
            fileName: (format) => `react-widget-uv.js`,
            formats: ['iife'],
        },
        rollupOptions: {
            // Ensure specific external checks if needed, but for a widget we generally want to bundle everything.
            // However, sometimes purely node-side things might creep in.
            external: [],
            output: {
                // Globals are mostly for UMD/IIFE when we externalize things, 
                // but here we are bundling React so we don't need them.
                globals: {},
            },
        },
        // Minify output
        minify: true,
    },
});
