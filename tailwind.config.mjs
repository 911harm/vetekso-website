/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#aebcff",
          500: "#00105B",
        },
        fuchsia: {
          100: "#dd78cb",
          500: "#841B71",
        },
        translucent: "#D9D9D94D",
        shadow: "#00000033",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #aebcff 0%, #ffd5f7 100%)",
        "custom-gradient-2": "linear-gradient(90deg, #00105B 0%, #841B71 100%)",
      },
    },
  },
  plugins: [],
};
