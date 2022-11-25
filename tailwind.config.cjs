module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#e05216',
        grey: '#F5F5F5',
        primary: '#F2F2F2',
        secondary: '#333CC1'
      },
      backgroundImage: {
        overview: "url('/src/assets/svg/img3.jpg')",
        // cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [],
};
