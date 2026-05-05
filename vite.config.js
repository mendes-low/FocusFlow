import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/app/styles/variables.scss" as *;`,
            },
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:11434",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
