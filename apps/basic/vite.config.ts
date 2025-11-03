// b_path:: apps/basic/vite.config.ts
// // b_path:: apps/spa/vite.config.ts
// b_path:: vite.config.ts

import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "./src/app/routeTree.gen.ts",
      routesDirectory: "./src/app/routes",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "@tailwindcss/vite";
// import tsconfigPaths from "vite-tsconfig-paths";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(), tsconfigPaths()],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendors: ["react", "react-dom"],
//         },
//       },
//     },
//   },
// });
