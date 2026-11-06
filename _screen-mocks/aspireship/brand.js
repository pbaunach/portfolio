// Aspireship brand tokens for the Tailwind Play CDN. Load after cdn.tailwindcss.com.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        purple: { DEFAULT: '#4810A4', light: '#713EE9' },
        ink: '#001226',
        gray: { 700: '#334151', 600: '#66717D', 400: '#9DA4AB', 300: '#CCD0D4', 200: '#DCE0E3', 150: '#E2E5E8', 50: '#F6F7FA' },
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,18,38,.04), 0 4px 16px -4px rgba(0,18,38,.08)',
        lift: '0 10px 24px -8px rgba(72,16,164,.55)',
      },
    },
  },
};
