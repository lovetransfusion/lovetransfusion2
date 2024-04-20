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
        sm: '2rem',
        lg: '4rem',
        xl: '70px',
        '2xl': '198px',
      },
    },
    extend: {
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
