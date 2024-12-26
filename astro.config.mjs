// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://pizzeton-web-oficial.vercel.app/",
  integrations: [tailwind(), react(), sitemap()],
  adapter: vercel(),
});