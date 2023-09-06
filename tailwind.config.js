/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          50: '#D3DEFD',
          100: '#B5C9FB',
          200: '#90ADF9',
          300: '#6B92F8',
          400: '#4677F6',
          500: '#215CF4',
          600: '#1C4DCB',
          700: '#163DA3',
          800: '#112E7A',
          900: '#0B1F51',
          1000: '#071231',
          1100: '#1B202B',
        }
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/nesting'),
  ]
}