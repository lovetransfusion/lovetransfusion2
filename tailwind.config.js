/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
      screens: {
        DEFAULT: '1140px',
      },
    },
    extend: {
      boxShadow: {
        custom1: '0 0 23px 0 rgba(49, 144, 221, 0.53)',
        custom2: '3px 3px 3px 0px rgba(47, 142, 221, 0.32)',
        custom3: '2px 2px 2px 0px rgba(47, 142, 221, 0.32)',
        custom4: '1px 1px 5px 0px rgba(40, 140, 204, 0.75)',
        custom5: '0px 0px 20px 5px rgba(47, 142, 221, 0.22)',
      },
      fontFamily: {
        sans: ['var(--franklinGothicBook)'],
        demiCond: ['var(--franklinGothicDemiCond)'],
        mediumCond: ['var(--franklinGothicMediumCond)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#2f8edd',
          50: '#f1f7fe',
          100: '#e3eefb',
          200: '#c0dcf7',
          300: '#89c0f0',
          400: '#4aa0e6',
          600: '#1567b4',
          700: '#125392',
          800: '#134679',
          900: '#153d65',
          950: '#0e2643',
        },
      },
    },
  },
  plugins: [],
}
