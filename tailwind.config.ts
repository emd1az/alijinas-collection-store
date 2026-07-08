import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        boutique: {
          bg: "#FFF7FA",
          card: "#FFFFFF",
          pink: "#F7BFD2",
          cta: "#E75480",
          cream: "#FFF1E6",
          text: "#2B2B2B",
          footer: "#1F1F1F",
          blue: "#DFF3FF",
          lavender: "#EEE7FF"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(231, 84, 128, 0.13)",
        card: "0 12px 30px rgba(43, 43, 43, 0.08)"
      },
      borderRadius: {
        soft: "1.5rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
