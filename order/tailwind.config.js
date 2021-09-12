module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      gray: '#ccc',
      red: 'red',
      white: '#fff',
      blue: {
        DEFAULT: '#007ff5',
        100: '#0415b0',
      },
      black: '#000',
    },
    boxShadow: {
      DEFAULT: '0 3px 10px rgba(0,0,0,0.3)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
