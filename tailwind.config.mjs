/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#09090b",
      white: "#d8ddf3",
      blue: "#00105B",
      fuchsia: {
        100: "#dd78cb",
        500: "#841B71",
      },
      translucent: "#D9D9D94D",
    },
    extend: {},
  },
  plugins: [],
};
