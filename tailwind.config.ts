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
        background: "var(--background)",
        foreground: "var(--foreground)",
        nine: "#6d6d6d",
        accentBlue: "#03e3a6",
        develop: "#e7fcf6",
        design: "#6a6a6a",
      },
    },
  },
  plugins: [],
};
export default config;
