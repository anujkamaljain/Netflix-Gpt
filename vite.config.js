import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: ["@babel/plugin-transform-react-jsx"],
      },
      // Ensure JSX is processed in .js files
      include: ["**/*.{js,jsx,ts,tsx}"],
    }),
  ],
});
