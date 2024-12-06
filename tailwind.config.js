/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    
    extend: {
      fontFamily: {
        satoshi : ["Satoshi-Regular","san-serif"],
        satoshiMedium: ['Satoshi-Medium'],
        
        heading: [ "Lora", 'serif'],
        
      },
      colors: {
      heading : '#003B5C',
      secondary: '#015775'}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
