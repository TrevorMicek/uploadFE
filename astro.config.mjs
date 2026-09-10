// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import cloudflare from "@astrojs/cloudflare";
// https://astro.build/config

export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: cloudflare(),
});
