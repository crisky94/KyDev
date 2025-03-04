module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'jersey-15': ['"Jersey 15"', 'serif'], 
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  
};
