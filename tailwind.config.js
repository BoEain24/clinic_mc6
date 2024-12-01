/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src directory
  ],
  darkMode: "class", // Enable dark mode if needed
  theme: {
    extend: {
      fontFamily: {
        // Define your custom fonts here
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
        custom: ["Lora", "Satoshi", "sans-serif"], // Custom fonts defined in your @font-face
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // You can add more plugins if needed
};
