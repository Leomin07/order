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
        200: '#2c3e50',
      },
      black: {
        DEFAULT: '#000',
        shadow: 'rgba(0,0,0,0.7)',
      },
      lightblue: 'lightblue',
    },
    boxShadow: {
      DEFAULT: '0 3px 10px rgba(0,0,0,0.3)',
    },
    zIndex: {
      999: '9999',
    },
    // margin: {
    //   '2/5': '40%',
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
