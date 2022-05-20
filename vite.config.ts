import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({})],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@shared",
        replacement: path.resolve(__dirname, "src/components/shared"),
      },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@routes", replacement: path.resolve(__dirname, "src/routes") },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
    ],
  },
});
