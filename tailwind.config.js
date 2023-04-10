/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html'
    ],
  media: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    ],
  content: [
    // './pages/**/*.{html,js}',
    // './components/**/*.{html,js}',
    ],
}
