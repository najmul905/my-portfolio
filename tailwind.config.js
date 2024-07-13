/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  {
        'gradient-to-r-opacity': 'linear-gradient(to right, rgba(75, 0, 130, 0.3), rgba(128, 0, 128, 0.3), rgba(255, 20, 147, 0.3))',
      },
    },
  },
  plugins: [require("daisyui")],
}

