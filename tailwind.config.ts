import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d6e0ec",
          200: "#adc1d9",
          300: "#7d9cbf",
          400: "#4f759e",
          500: "#345a80",
          600: "#254566",
          700: "#1b3450",
          800: "#13294B",
          900: "#0B1B33",
          950: "#070F1F",
        },
        gold: {
          50: "#faf6ec",
          100: "#f2e8cc",
          200: "#e5d09b",
          300: "#d7b96c",
          400: "#c9a661",
          500: "#b8934c",
          600: "#96753a",
          700: "#755a2e",
        },
        paper: "#FAFAF7",
        ink: "#101418",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,27,51,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,51,0.04) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
