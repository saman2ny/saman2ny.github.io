import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://saman2ny.github.io",
  output: "static",

  integrations: [react()],

  server: {
    host: true,
  },
});