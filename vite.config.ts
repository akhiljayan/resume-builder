import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react-swc";
import TsconfigPathsPlugin from "vite-plugin-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          RESUME_TITLE:
            process.env.USER === "akjn"
              ? "Akhil Jayan - Résumé"
              : "Kavya Elizabeth James - Résumé",
        },
      },
    }),
    TsconfigPathsPlugin(),
  ],
  define: {
    "process.env.USER": JSON.stringify(process.env.USER || "akjn"),
    "process.env.TYPE": JSON.stringify(process.env.TYPE || "modern"),
  },
  resolve: {
    alias: {
      "@component": "/src/components",
      "@page": "/src/pages",
      "@data": "/src/data",
      "@assets": "/src/assets",
    },
  },
});
