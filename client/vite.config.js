import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this is correct for your deployment
  build: {
    outDir: "dist", // Specifies the output directory
    emptyOutDir: true, // Clears the dist folder before building
   // rollupOptions: {
    //  input: "./index.html", // Entry point of your app
   // },
  },
  //publicDir: "public", // Ensure static assets like favicon.ico are properly handled
});
