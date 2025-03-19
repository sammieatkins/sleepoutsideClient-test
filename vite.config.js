import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve("src/index.html"),
        cart: resolve("src/cart/index.html"),
        checkout: resolve("src/checkout/index.html"),
        product1: resolve("src/product_pages/index.html"),
      },
    },
  },
});
