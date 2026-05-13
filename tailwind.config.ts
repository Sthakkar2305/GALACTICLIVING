import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        galactic: {
          red: "#E50914",
          black: "#0B0B0B",
          ink: "#151515",
          mist: "#F6F6F4"
        }
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(11, 11, 11, 0.12)",
        redglow: "0 18px 60px rgba(229, 9, 20, 0.22)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "Montserrat", "Inter", "sans-serif"]
      },
      backgroundImage: {
        "red-radial": "radial-gradient(circle at 20% 20%, rgba(229,9,20,.22), transparent 30%)",
        "black-silk": "linear-gradient(135deg, #050505 0%, #121212 48%, #250305 100%)"
      }
    }
  },
  plugins: []
};

export default config;
