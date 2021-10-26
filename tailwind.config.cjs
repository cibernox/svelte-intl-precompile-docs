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
      'code': '#f6fafd'
    }    
  },

  plugins: [],
};

module.exports = config;
