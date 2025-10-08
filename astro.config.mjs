import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://kropal-playable.github.io',
  base: '/',
  integrations: [tailwind({ applyBaseStyles: true })],
});
