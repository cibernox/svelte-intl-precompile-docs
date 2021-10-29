const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
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
      console.log('bg colors', {
        ...theme('colors'),
        'code': '#f6fafd',
      });

      return {
        ...theme('colors'),
        'code': '#f6fafd',
      };
    },
  },

  plugins: [],
};

module.exports = config;
