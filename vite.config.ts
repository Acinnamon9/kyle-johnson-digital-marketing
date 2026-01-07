
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
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/widget-entry.tsx'),
            name: 'MyWidget',
            fileName: () => `widget.js`,
            formats: ['iife'],
        },
        rollupOptions: {
            external: [], // Bundle everything including React
            output: {
                globals: {},
                inlineDynamicImports: true,
            },
        },
        minify: true,
        emptyOutDir: false, // Don't delete index.html or other static files in dist if they exist
    },
});
