//=vite.config.js

import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"

const srcAlias = fileURLToPath(new URL("./src", import.meta.url))
const componentsAlias = fileURLToPath(new URL("./src/components", import.meta.url))
const assetsAlias = fileURLToPath(new URL("./src/assets", import.meta.url))

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": srcAlias,
      "@components": componentsAlias,
      "@assets": assetsAlias,
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
