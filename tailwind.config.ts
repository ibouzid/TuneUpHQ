import type { Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        gold: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#E6B800",
          600: "#D4A017",
          700: "#B38600",
          800: "#8C6700",
          900: "#5E4300",
        },
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          subtle: "var(--bg-subtle)",
          inverse: "var(--bg-inverse)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          inverse: "var(--text-inverse)",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
          goldPrimary: "var(--text-gold-primary)",
          goldSecondary: "var(--text-gold-secondary)"
        },
        border: {
          subtle: "var(--border-subtle)",
          muted: "var(--border-muted)",
          strong: "var(--border-strong)",
        },
        chart: {
          1: "#E6B800", 2: "#3B82F6", 3: "#22C55E", 4: "#A855F7",
          5: "#F97316", 6: "#EC4899", 7: "#06B6D4", 8: "#84CC16",
        },
      },
      boxShadow: {
        xs: "0 1px 1px rgba(0,0,0,0.15)",
        sm: "0 1px 2px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)",
        md: "0 4px 6px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.3), 0 4px 6px rgba(0,0,0,0.15)",
        xl: "0 20px 25px rgba(0,0,0,0.35), 0 10px 10px rgba(0,0,0,0.2)",
        elevated: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "gold-glow": "0 0 20px -5px rgba(230, 184, 0, 0.3)",
      },

      borderRadius: {
        xs: "4px", sm: "6px", md: "8px", lg: "12px", xl: "16px", "2xl": "20px",
      },

      backgroundImage: {
        "gradient-gold-primary": "linear-gradient(135deg, #F2C94C 0%, #D4A017 45%, #8C6700 100%)",
        "gradient-gold-light": "linear-gradient(135deg, #FFECB3 0%, #FFD54F 45%, #E6B800 100%)",
        "gradient-primary": "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%)",
        "gradient-sidebar-active": "linear-gradient(90deg, #D4A017 0%, transparent 100%)",
      },
      keyframes: {
        "slide-down-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(-24px) scale(0.98)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        "slide-down-fade": "slide-down-fade 300ms cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },

  plugins: [
    scrollbar({ nocompatible: true }),
  ],
};

export default config;