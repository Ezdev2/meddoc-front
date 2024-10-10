/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      }
    },
  },
  plugins: [  require('flowbite/plugin')({
    charts: true,
  })],
}

