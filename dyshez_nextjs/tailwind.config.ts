import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary": "#E3026F",
      "black": "#000000",
      "white": "#FFFFFF",
      "light": "#E7E7E9",
      "gray": "#797979",
      "green": "#82e0aa",
      "red": "#e74c3c",
    }
  },
  plugins: [],
};
export default config;
