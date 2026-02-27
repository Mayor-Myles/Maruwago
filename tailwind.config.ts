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
        brand: {
          orange: "#F97316",
          dark: "#FF4500",
          charcoal: "#1C1C1E",
          smoke: "#2A2A2E",
          ash: "#3A3A3E",
          cream: "#FFF8F0",
          gold: "#F59E0B",
        }
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-ring": "pulseRing 2s infinite",
        "ride": "ride 3s linear infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(249,115,22,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(249,115,22,0)" },
        },
        ride: {
          "0%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(-10px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
