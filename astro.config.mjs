import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// setup on demand rendering https://docs.astro.build/en/guides/server-side-rendering/
// cred: @meerkatDotTs
export default defineConfig({
    output: 'server',
    adapter: cloudflare()
});