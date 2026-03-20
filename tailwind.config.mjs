import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customBlue: "#323D40",
        customGray: "#E4E4E3",
        lightBlue: "#55B6D9",
        fontColour: "#3B464B",
        headerGrey: "#D8D9D3",
        customGold: "#C58C49",
      },
    },
  },
  plugins: [typography],
};

export default config;
