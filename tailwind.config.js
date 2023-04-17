/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a',
        'dark-bg': '#1b253b',
        'dark-gray': '#25304c',
        'light-bg': '#f1f5f9',
        'dark-text': "#cbd5e1",
        'light-text': '#283344'
        
        
      }
    },
  },
  plugins: [],
}