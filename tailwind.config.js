/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#ff905e",
        bg: "rgb(10 20 30)",
        blue: "rgb(95 86 245)",
        grn: "rgb(17, 157, 164)",
        darkgn: "rgb(12, 116, 137)",
        darkergn: "rgb(19, 80, 91)",
        wh: "rgb(215, 217, 206)",
        lightblue: "#6bcecf",
        orange: "#ff905e",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        denver:
          "url(https://res.cloudinary.com/websites-by-trevor/image/upload/v1738001921/pexels-taryn-elliott-4858584_ekk8pj.jpg)",
      },
    },
    screens: {
      xs: "420px",
      xxs: "375px",
      ".5xl": "960px",
      ...defaultTheme.screens,
    },
    fontSize: {
      "1.5xl": "1.4rem",
      "2.5xl": "1.65rem",
      "3.5xl": "2.1rem",
      "4.5xl": ["2.6rem", "2.75rem"],
      "5.5xl": ["3.3rem", "1"],
      ...defaultTheme.fontSize,
    },

    fontFamily: {
      body: ["Jost"],
    },
  },
  plugins: [],
};
