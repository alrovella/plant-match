import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY": JSON.stringify(
      process.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY
    ),
  },
  plugins: [react()],
});
