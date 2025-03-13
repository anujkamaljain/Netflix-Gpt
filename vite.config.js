import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: ["@babel/plugin-transform-react-jsx"],
      },
    }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/, // Ensure JSX is recognized in .js files
  },
});

