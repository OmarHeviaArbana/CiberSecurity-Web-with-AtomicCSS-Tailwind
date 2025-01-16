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
        "14": "0.87rem", // 14px
        "16": "1rem",    // 16px
        "18": "1.2rem",  // 18px
        "20": "1.25rem", // 20px
        "24": "1.5rem",  // 24px
        "28": "1.75rem", // 28px
        "30": "1.87rem", // 30px
        "36": "2.25rem", // 36px
        "48": "3rem",    // 48px
        "70": "4.37rem", // 70px
      },
      screens: {
        xs: "0px",       // Extra pequeño
        sm: "390px",     // Pequeño
        md: "600px",     // Mediano
        lg: "900px",     // Grande
        xl: "1200px",    // Extra grande
        xxl: "1600px",   // Extra extra grande
      },
      /* gridTemplateColumns: {
        '3': '300px repeat(3, auto)',
      } */
    },
  },
  plugins: [],
}

