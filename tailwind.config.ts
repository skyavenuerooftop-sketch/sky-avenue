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
        navy: {
          950: "#020617",
          900: "#020617",
          800: "#020617"
        },
        gold: "#fbbf24",
        skybrand: "#38bdf8",
        // Brand tokens you can tweak to match your design
        brand: {
          bg: "#020617",
          surface: "#020617",
          accent: "#fbbf24",
          accentAlt: "#38bdf8"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.45)"
      }
    }
  },
  plugins: []
};
export default config;
