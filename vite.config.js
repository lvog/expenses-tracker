import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), viteCompression(), visualizer({ open: true })],
  optimizeDeps: {
    include: [
      "recharts",
      "framer-motion",
      "react-datepicker",
      "react-select",
      "styled-components",
      "i18next",
      "react-i18next",
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].[hash].js",
        chunkFileNames: "js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split(".").pop();
          if (ext === "css") return "css/[name].[hash][extname]";
          if (["woff", "woff2", "ttf", "otf", "eot"].includes(ext))
            return "fonts/[name].[hash][extname]";
          if (["png", "jpg", "jpeg", "gif", "svg", "webp", "ico"].includes(ext))
            return "img/[name].[hash][extname]";
          return "assets/[name].[hash][extname]";
        },
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "framer-motion",
            "recharts",
            "react-datepicker",
            "react-select",
            "styled-components",
            "i18next",
            "react-i18next",
          ],
        },
      },
    },
  },
  server: {
    host: true,
    open: false,
    port: 3000,
  },
});
