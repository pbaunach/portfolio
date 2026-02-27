/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Orchard Brand Colors
        'orchard-blue': '#13c7e5',
        'orchard-green': '#3CD343',
        
        // Midnight Color Palette
        'midnight-dark': '#08121D',
        'midnight-medium': '#0C2235',
        'midnight-light': '#223B4C',
        'midnight-lighter': '#516F84',
        
        // Neutral Colors
        'slate': '#B5BFC8',
        'slate-light': '#E4E9ED',
        'cauliflower': '#FFFFFF',
        
        // Accent Colors
        'dragon-fruit': '#F759B3',
        'orange': '#F29820',
        'plum': '#BE13E8',
        'lemon': '#E8F948',
        'raspberry': '#EA1B66',
        'blueberry': '#3372FF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
