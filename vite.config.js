import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // En Pages uso el nombre del repositorio como ruta base.
  base: command === "build" ? "/Hito6-context1-react/" : "/",
}));
