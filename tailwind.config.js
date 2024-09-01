/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
  			'card-background': '#000',
  			card1: '#52B2CF',
  			card2: '#E5A36F',
  			card3: '#9CADCE',
  			card4: '#D4AFB9'
  		},
  		boxShadow: {
  			card: '0 0 30px 0 rgba(0,0,0,0.3)'
  		},
  	
    },
  },
  plugins: [],
};
