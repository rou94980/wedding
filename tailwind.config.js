/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#faf7f1',
        cream: '#f4ecdf',
        oat: '#ebe0cf',
        latte: '#d5bda2',
        mocha: '#6f6255',
        stonewash: '#a8998a',
        gold: '#d7c28e',
        pine: '#5d715b',
      },
      fontFamily: {
        body: ['"Noto Serif TC"', 'serif'],
        display: ['"Cormorant Garamond"', '"Noto Serif TC"', 'serif'],
        script: ['"Allura"', 'cursive'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(125, 102, 76, 0.16)',
        card: '0 18px 48px rgba(125, 102, 76, 0.14)',
      },
      backgroundImage: {
        aura:
          'radial-gradient(circle at top, rgba(255,255,255,0.92), rgba(250,247,241,0.84) 42%, rgba(235,224,207,0.65) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 5.4s ease-in-out infinite',
        drift: 'drift 7.2s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

