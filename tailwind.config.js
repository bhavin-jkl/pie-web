module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.js",
    "./components/**/*.js",
    "./pages/**/*.js",
    "./containers/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "box-shadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "shadow-large":
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        "card-shadow":
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        "small-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
      maxWidth: {
        "8xl": "1440px",
        "9xl": "1600px",
      },
      colors: {
        primary1: "#1e3b69",
        primary2: "#ee7902",
        primary3: "#263238",
        primary4: "#FFFFFF",
        primary5: "#000000",
        primary6: "#9E9E9E",
        primary7: "#f8f8f8",
        primary8: "#307e33",
        primary9: "#6b7280",
        primary10: "#37517e",

        neutrals8: "#fcfcfd",
        neutrals1: "#141416",
      },
    },
    screens: {
      xs: "475px",
      ls: "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1636px",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem", // 12px
      tiny: ".8125rem", // 13px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
      "7xl": "5rem", // 80px
    },
  },
  plugins: [],
};
