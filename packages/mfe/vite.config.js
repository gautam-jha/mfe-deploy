import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    federation({
      name: "remote-app",
      filename: "mfeRemoteEntry.js",
      // Modules to expose
      exposes: {
        "./Mfe": "./src/App.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    target: 'esnext',
    rollupOptions: {
      external: ['/config.js?url', '../../../config.js?url']
    }
  }
});
