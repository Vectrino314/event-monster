/** @type {import('tailwindcss/types').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

// Large Headline: 72 px semibold
// Sub header: 20 px semibold
// Body text size: 16 px - used in cards as headlines we use semibold
// In buttons: 20 px semi bold
//
// Purple is: 7d01ff
//
// Card grey: f7f7f7
// Card purple on mouse over: e9e8f7 with fade shadow
//
// Feature card mouse over bgg: fefbed with fade shadow
// Feature card border stroke: f5db85

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        link: '#797af4',
        eventPurple: '#7d01ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
