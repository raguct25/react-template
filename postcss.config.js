import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.js";

export default {
  Plugin: [tailwind(tailwindConfig), autoprefixer],
};