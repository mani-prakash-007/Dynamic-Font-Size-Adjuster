/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "1x": "16px",
        "2x": "18px",
        "3x": "20px",
        "4x": "22px",
        "5x": "24px",
        "6x": "26px",
        "7x": "28px",
        "8x": "30px",
        "9x": "32px",
        "10x": "34px",
        "11x": "36px",
        "12x": "38px",
        "13x": "40px",
        "14x": "42px",
        "15x": "44px",
        "16x": "46px",
        "17x": "48px",
        "18x": "50px",
        "19x": "52px",
        "20x": "54px",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
      },
    },
  },
  plugins: [],
};
