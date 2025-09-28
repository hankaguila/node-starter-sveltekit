import type { Config } from "@sveltejs/kit";
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// https://svelte.dev/docs/kit/configuration
const config: Config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $: "src"
    }
  }
};

export default config;
