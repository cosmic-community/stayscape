/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5A5F',
          50: '#FFF5F5',
          100: '#FFE5E6',
          200: '#FFBFC0',
          300: '#FF9A9C',
          400: '#FF7A7D',
          500: '#FF5A5F',
          600: '#FF2227',
          700: '#E90007',
          800: '#B10005',
          900: '#790004',
        },
        secondary: {
          DEFAULT: '#00A699',
          50: '#E6FBF9',
          100: '#B3F3EE',
          200: '#80EBE3',
          300: '#4DE3D8',
          400: '#1ADBCD',
          500: '#00A699',
          600: '#008577',
          700: '#006456',
          800: '#004338',
          900: '#00211C',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 6px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}