import { defineConfig } from "vite";

// import reext from "./node_modules/@sencha/reext/dist/ReExt/vite-plugin-reext.js";
import reextPlugin from "./public/ReExt/next-plugin-reext.mjs";
export default defineConfig({
  plugins: [reextPlugin()],
});
