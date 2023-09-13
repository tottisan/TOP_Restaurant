import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "/about/index.html"),
        coffe: resolve(__dirname, "/coffe/index.html"),
      },
    },
  },
});
