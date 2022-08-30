/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "920px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        primary: "#2599D2",
        secondary: "#7BB690",
        third: "#669AB4",
        inputColor: "#159BDE",
        "primary-button": "#01ACE6",
      },
      scale: {
        "-1": "-1",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      "lato-light": ["Lato-light"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".navbar-shadow": {
          boxShadow: "0px -2px 9px #e1e1e9",
        },
        ".navbar-border-transparent": {
          borderTop: "4px solid transparent",
        },
        ".mobile-screen-height": {
          height: "calc(100vh - 60px)",
        },
        ".container": {
          maxWidth: "100%",
          // "@screen sm": {
          //   maxWidth: "460px",
          // },
          "@screen md": {
            maxWidth: "800px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1300px",
          },
        },
        ".text-title-md": {
          fontFamily: "lato",
          textTransform: "uppercase",
          fontSize: "40px",
          lineHeight: "58px",
          fontWeight: "900",
          letterSpacing: "0.1em",
          color: "transparent",
          background: "linear-gradient(to right, #bab8b8b0, #fafafa, white)",
          "-webkit-background-clip": "text",
        },
        ".text-title-sm": {
          fontFamily: "lato",
          textTransform: "uppercase",
          fontSize: "32px",
          lineHeight: "48px",
          fontWeight: "900",
          letterSpacing: "0.1em",
          color: "transparent",
          background: "linear-gradient(to right, #bab8b8b0, #fafafa, white)",
          "-webkit-background-clip": "text",
        },
      });
    },
  ],
};
