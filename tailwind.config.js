/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#000000',
        surface: '#0a0a0a',
        'surface-alt': '#111111',
        'border-subtle': '#1a1a1a',
        'border-default': '#333333',
        'amber-primary': '#ff8c00',
        'amber-dim': '#cc7000',
        'green-primary': '#00ff41',
        'green-dim': '#00cc34',
        'red-primary': '#ff3333',
        'text-primary': '#e0e0e0',
        'text-secondary': '#999999',
        'text-dim': '#555555',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '2px',
      },
    },
  },
  plugins: [],
}
