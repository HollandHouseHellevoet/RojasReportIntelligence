/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0a1520',
          body: '#0d1a26',
          surface: '#1a2a3a',
        },
        fah: {
          accent: '#EB6E2C',
          cream: '#f7f4ef',
        },
        border: {
          subtle: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
