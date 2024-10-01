import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sentry from '@sentry/astro';


// https://astro.build/config
export default defineConfig({
  integrations: [sentry(), preact(), tailwind()]
});



