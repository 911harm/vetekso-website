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
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #aebcff 0%, #ffd5f7 100%)",
        "custom-gradient-2": "linear-gradient(90deg, #00105B 0%, #841B71 100%)",
      },
    },
  },
  plugins: [],
};
