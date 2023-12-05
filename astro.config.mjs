import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pandacss from '@pandacss/astro'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), pandacss({ applyBaseStyles: false })]
});