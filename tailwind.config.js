/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ["synthwave", "winter"]
  },
}

