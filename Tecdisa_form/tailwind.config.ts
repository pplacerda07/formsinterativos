import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0A0F1A",
          surface: "#14152D",
          elevated: "#1E2540",
        },
        primary: {
          DEFAULT: "#33E561",
          hover: "#55CD6C",
        },
        accent: {
          DEFAULT: "#4AEADC",
          soft: "#7BEAE0",
        },
        brand: {
          green: "#33E561",
          "green-soft": "#55CD6C",
          cyan: "#4AEADC",
          navy: "#14152D",
          "navy-soft": "#26274275",
        },
        silver: {
          1: "#C0C5CE",
          2: "#E8EAF0",
        },
        text: {
          primary: "#FCFCFC",
          muted: "#88909B",
        },
        border: {
          DEFAULT: "#26274275",
        },
        success: "#33E561",
        danger: "#D9534F",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(51, 229, 97, 0.22)",
        "glow-strong": "0 0 60px rgba(74, 234, 220, 0.32)",
      },
      backgroundImage: {
        "tecdisa-green":
          "linear-gradient(135deg, #33E561 0%, #4AEADC 100%)",
        "tecdisa-green-soft":
          "linear-gradient(135deg, #55CD6C 0%, #7BEAE0 100%)",
        "silver-shine":
          "linear-gradient(135deg, #C0C5CE 0%, #E8EAF0 50%, #C0C5CE 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
