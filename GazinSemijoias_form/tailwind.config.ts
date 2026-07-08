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
          base: "#FDFBF7",
          surface: "#FFFFFF",
          elevated: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#E87676",
          hover: "#D46565",
        },
        secondary: {
          DEFAULT: "#ED6161",
          hover: "#D85151",
        },
        brand: {
          salmon: "#E87676",
          coral: "#ED6161",
          "salmon-light": "#F49C9C",
        },
        text: {
          primary: "#4A4040",
          muted: "#7A6F6F",
        },
        border: {
          DEFAULT: "#F49C9C",
        },
        success: "#5BC47D",
        danger: "#D9534F",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      boxShadow: {
        glow: "0 8px 24px rgba(232, 118, 118, 0.15)",
        "glow-strong": "0 12px 32px rgba(237, 97, 97, 0.25)",
      },
      backgroundImage: {
        "gazin-gradient":
          "linear-gradient(135deg, #E87676 0%, #ED6161 100%)",
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
