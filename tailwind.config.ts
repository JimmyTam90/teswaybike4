import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#16A34A", dark: "#15803D" },
        electric: "#2563EB",
        bg: "#0F172A",
        card: "#1E293B",
        ink: "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
