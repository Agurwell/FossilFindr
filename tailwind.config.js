/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sandstone: '#e6d7b9',
        bone: '#f8f4e9',
        slate: {
          deep: '#3d4449',
        },
        moss: {
          light: '#7d9872',
          DEFAULT: '#4c6851',
          dark: '#354b39',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
};