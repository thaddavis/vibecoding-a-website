// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // Red
        darkred: '#8a112d', // Dark Red
        grey: '#5a6268',    // Grey
        white: '#ffffff',   // White
      },
    },
  },
  plugins: [],
}; 