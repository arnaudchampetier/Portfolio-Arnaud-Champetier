/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    transform: {
      "scale-0": "scale(0)",
      "scale-50": "scale(0.5)",
      "scale-75": "scale(0.75)",
      "scale-90": "scale(0.9)",
      "scale-100": "scale(1)",
      "scale-110": "scale(1.1)",
    },
  },
  plugins: [],
};
