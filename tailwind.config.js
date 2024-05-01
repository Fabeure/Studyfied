/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dblue: "var(--color-dark-blue)", // Map to your custom variable
        Lblue: "var(--color-light-blue)",
        grey: "var(--color-grey)",
        yellow: "var(--color-yellow)", // Map to your custom variable
      },
    },
  },
  plugins: [],
};
