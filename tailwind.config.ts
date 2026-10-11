import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { eco: "#16A34A", volt: "#2563EB", ink: "#0F172A", carbon: "#1E293B", mist: "#F8FAFC" },
      fontFamily: { sans: ["var(--font-body)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
