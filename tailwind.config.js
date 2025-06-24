/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        // Add other fonts if needed
      },
      colors: {
        customBlue: '#323D40',
        customGray: '#E4E4E3',
        lightBlue: '#55B6D9',
        fontColour: '#3B464B',
        headerGrey:'#D8D9D3',
        customGold: '#C58C49',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}