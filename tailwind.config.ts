import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light:{
          bg:"#E8F1F2",
          primary: "#2E5077",
          secondary:"#B97375",
          focus:"#006494"
        },
        dark:{
          bg:"#262322",
          primary:"#4DA1A9",
          secondary:"#CEB1BE",
          focus:"#8093F1"
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
  darkMode:"class",
};
export default config;


