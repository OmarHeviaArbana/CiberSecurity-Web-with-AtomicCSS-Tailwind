/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: "#3636C6",
        secondary: "#C7F817",
        background: "#EAEDF5",
        footer: "#F4F5F8",
        text: "#202022",
        white: "#FFFFFF",
        error: "#C6366D",
      },
      fontFamily: {
        principal: ["Lalezar", "system-ui"],
        secondary: ["Inter", "sans-serif"],
      },
      fontSize: {
        "14": "0.87rem",
        "16": "1rem",
        "18": "1.2rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "28": "1.75rem",
        "30": "1.87rem",
        "36": "2.25rem",
        "48": "3rem",
        "70": "4.37rem",
      },
      screens: {
        sm: "390px",
        md: "600px",
        lg: "900px",
        xl: "1200px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
}

