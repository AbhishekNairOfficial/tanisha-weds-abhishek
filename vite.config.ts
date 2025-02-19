import { defineConfig } from "vitest/config";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* pass your config */
      webp: { quality: 50 },
    }),
  ],
  test: {
    environment: "happy-dom",
  },
});
