/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'xl-soft': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};