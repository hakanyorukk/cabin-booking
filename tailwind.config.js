import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        moveInLeft: {
          "0%": { opacity: "0", transform: "translateX(-200px)" },
          "80%": { transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        moveInRight: {
          "0%": { opacity: "0", transform: "translateX(200px)" },
          "80%": { transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        moveInBottom: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
        pulseUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 1.5s ease-out",
        moveInRight: "moveInRight 1.5s ease-out",
        moveInBottom: "moveInBottom 1s ease-out",
        pulseUpDown: "pulseUpDown 2s ease-in-out infinite",
      },
    },
    plugins: [],
  },
};
