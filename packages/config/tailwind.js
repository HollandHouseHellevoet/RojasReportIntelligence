/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        navy: '#1a2a3a',
        orange: '#EB6E2C',
        cream: '#F4F2E6',
      },
      fontFamily: {
        headline: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
}

module.exports = config
