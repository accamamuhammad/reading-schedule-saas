/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBg: "#F3F5FF",
        secBg: "#5335D9",
        mainText: "#0B0A33",
      },
      animation: {},
    },
  },
  plugins: [],
};
