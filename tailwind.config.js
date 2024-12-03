/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],

  daisyui: {
    base: false, // applies background color and foreground color for root element by default
  },
};
