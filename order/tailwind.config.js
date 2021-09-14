module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      gray: {
        DEFAULT: '#ccc',
        100: '#bfc7c7',
      },
      red: 'red',
      white: {
        DEFAULT: '#fff',
        100: '#f5f5f5',
      },
      blue: {
        DEFAULT: '#007ff5',
        100: '#0415b0',
      },
      black: '#000',
      lightblue: 'lightblue',
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
