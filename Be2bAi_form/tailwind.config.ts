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
          base: "#0A0B1E",
          surface: "#14152B",
          elevated: "#1C1E3D",
        },
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#6366F1",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
        },
        silver: {
          1: "#C0C5CE",
          2: "#E8EAF0",
        },
        text: {
          primary: "#F4F4F8",
          muted: "#8B8FA8",
        },
        border: {
          DEFAULT: "#2A2D4A",
        },
        success: "#10B981",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 70, 229, 0.18)",
        "glow-strong": "0 0 60px rgba(139, 92, 246, 0.28)",
      },
      backgroundImage: {
        "indigo-violet": "linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)",
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
