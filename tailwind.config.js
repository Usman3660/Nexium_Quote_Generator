/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-blue': '#60a5fa',
        'gradient-purple': '#a78bfa',
        'gradient-pink': '#f9a8d4',
        'gradient-sky': '#7dd3fc',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};