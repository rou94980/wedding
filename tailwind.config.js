/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f4f1ea",
        cream: "#ebe7dd",
        oat: "#d7d0c3",
        latte: "#4f5b45",
        mocha: "#151512",
        stonewash: "#5f6059",
        gold: "#9a865f",
        pine: "#1f2d21",
      },
      fontFamily: {
        body: ['"Noto Serif TC"', "serif"],
        display: ['"Cormorant Garamond"', '"Noto Serif TC"', "serif"],
        script: ['"Allura"', "cursive"],
      },
      boxShadow: {
        soft: "0 28px 70px rgba(20, 20, 16, 0.22)",
        card: "0 16px 36px rgba(20, 20, 16, 0.18)",
      },
      backgroundImage: {
        aura: "linear-gradient(180deg, rgba(244,241,234,0.96), rgba(235,231,221,0.92))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 5.4s ease-in-out infinite",
        drift: "drift 7.2s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
