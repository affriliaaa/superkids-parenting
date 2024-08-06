/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        'lg' : '125px',
        'md' : '32px'
      }
    },
    extend: {
      colors: {
        'purple': '#6100C1',
        'light-grey': '#CAC6FF',
        'lime': '#B2D93A',
        'dark-blue': '#222F5E',
        'light-blue': '#6ED2EF',
        'paragraph': '#878799',
        'orange': '#FF7D56',
        'amber': '#FDCF3F',
        'blue':  '#4F94FB'
      },
      fontFamily:  {
        'catamaran':  ['"Catamaran"', 'sans-serif'],
        'lato':  ['"Lato"', 'sans-serif'],
        'mazzard':  ['"Mazzard"', 'sans-serif'],
      },
      fontSize: {
        '31': '124px',
      },
      content: {
        'quote': 'url("images/quote.svg")',
        'vector-blue': 'url("images/vector-blue.svg")',
        'vector-orange': 'url("images/vector-orange.svg")',
        'vector-yellow': 'url("images/vector-yellow.svg")',
      },
    },
  },
  plugins: [],
}

