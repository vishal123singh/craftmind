import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-text-muted)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, var(--color-border) 1px, transparent 1px), " +
          "linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
      },
      opacity: {
        "3": "0.03",
        "5": "0.05",
      },
    },
  },
  plugins: [],
};

export default config;
