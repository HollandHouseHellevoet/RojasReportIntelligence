const baseConfig = require('@rojasreport/config/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: baseConfig.theme,
  plugins: [],
}
