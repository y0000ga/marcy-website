/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
        historyShown: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        historyShown: 'historyShown 2.5s ease 1',
      },
    },
  },
  plugins: [],
}
