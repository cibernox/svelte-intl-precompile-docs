const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      spacing: {
        '76': '19rem',
      },      
    },
    fontFamily: {
      body: "Overpass,sans-serif"
    },
    textColor: {
      'primary': '#ff3e00',
      'secondary': '#676778',
      'dark': '#34343d',
      'light': '#c0c0d8',
      'white': '#fff',
    },
    backgroundColor: (theme) => {
      return {
        ...theme('colors'),
        'code': '#f6fafd',
      };
    },
  },

  plugins: [],
};

module.exports = config;
