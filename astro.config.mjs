import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://kropal-playable.github.io', // ← замени на свой
  base: '/',                               // по умолчанию и так '/', но пусть явно
  integrations: [tailwind({ applyBaseStyles: true })],
});
