/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#02000a",
          900: "#030014",
          850: "#070420",
          800: "#0b082d",
          700: "#130f40",
        },
        blue: {
          100: "#aebcff",
          400: "#3b82f6",
          500: "#00105B",
        },
        fuchsia: {
          100: "#dd78cb",
          400: "#e879f9",
          500: "#841B71",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        translucent: "#ffffff0a",
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        shadow: "#00000033",
        "shadow-2": "#00000080",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #aebcff 0%, #ffd5f7 100%)",
        "custom-gradient-2": "linear-gradient(90deg, #00105B 0%, #841B71 100%)",
        "neon-gradient": "linear-gradient(135deg, #8a2be2 0%, #ff007f 50%, #00ffff 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Podkova Variable'", "serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-medium": "floatMedium 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(1.2)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-1.5deg)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
