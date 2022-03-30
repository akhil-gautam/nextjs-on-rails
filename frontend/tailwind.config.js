module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 5px rgba(151, 151, 244, 0.3), 0 0 5px rgba(149, 149, 247, 0.4)',
      },
    },
  },
  plugins: [require('daisyui')],
};
