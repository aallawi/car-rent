/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#34495e",
          hover: "#22313f",
        },
        secondary: {
          DEFAULT: "#22d3ee",
          hover: "#dd242a",
        },
        body: "#e4f1fe",
      },
    },
  },
  plugins: [],
};
