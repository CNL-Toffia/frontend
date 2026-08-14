import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: {
          50: "#FBF3EC",
          100: "#F3E0CE",
          300: "#D9A468",
          500: "#ECA315", // caramel-gold
          700: "#8A4A1F",
          900: "#5C2518", // caramel-dark
          gold: "#ECA315",
          dark: "#5C2518",
        },
        royal: {
          500: "#C1272D", // royal-red
          600: "#A31F24",
          red: "#C1272D",
        },
        cream: {
          DEFAULT: "#FDFBF7",
          100: "#FBF6EE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        warm: "0 8px 30px rgba(92, 37, 24, 0.12)",
        "warm-lg": "0 14px 40px rgba(92, 37, 24, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
