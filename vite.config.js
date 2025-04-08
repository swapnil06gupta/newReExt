import { defineConfig } from "vite";

// import reext from "./node_modules/@sencha/reext/dist/ReExt/vite-plugin-reext.js";
import reext from "../reext-demo/public/ReExt/next-plugin-reext";
export default defineConfig({
  plugins: [reext()],
});
