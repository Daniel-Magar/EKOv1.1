module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#020202",
        "bright-blue": "#0074e5",
        "baby-purple": "#bf99ff",
        "fade-gray": "rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        "hero-pattern": "url('../src/img/bridge-bg.png)",
      },
      fontFamily: {
        gillsans: ["Gill Sans", "Gill Sans"],
      },
    },
  },
  plugins: [],
};
