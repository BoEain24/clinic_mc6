/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        default: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Ubuntu",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft Yahei UI"',
          '"Microsoft Yahei"',
          '"Source Han Sans CN"',
          "sans-serif",
        ],
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
