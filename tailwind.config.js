/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '725px',
      '2xl': '1537px',
      xl: '1281px',
      lg: '1025px',
      md: '769px',
      sm: '641px',
    },
    minHeight: {
      'half-screen': '50vh',
      screen: '100vh',
    },
    extend: {
      flex: {
        2: '2 2 0%',
      },
      backgroundImage: {
        'main-bg': "url('/public/images/main-bg.png')",
      },
      height: {
        screen: '100vh',
        'half-screen': '50vh',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
        720: '720px',
        594: '594.61px',
        460: '460px',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
        720: '720px',
        460: '460px',
      },
      colors: {
        'black-steam': '#161b22',
        'red-fancy': '#e41f25',
        'purple-light-fancy': '#8350c3',
        'purple-dark-fancy': '#381e5b',
        'orange-fancy': '#f58216',
        'yellow-fancy': '#ffff00',
        'yellow-light-fancy': '#f3e876',
        'gold-fancy': '#ffd400',
        'purple-fancy': '#9d4edd',
        'blue-linked': '#0a66c2',
        'blue-twitter': '#1d9bf0',
        'blue-discord': '#5865f2',
      },
      keyframes: {
        glass_opacity: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        rolled_div: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        shrink_line: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)', visibility: 'hidden' },
        },
        bigger_bouncing: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1.2)' },
        },
        fade_out_quantum_bouncing: {
          '0%': {
            opacity: '100%',
            transform: 'scale(1)',
            'background-color': '#e41f25',
          },
          '60%': {
            opacity: '100%',
            transform: 'scale(1.2)',
            'background-color': '#ffd400',
          },
          '100%': {
            opacity: '0%',
            transform: 'scale(0)',
            visibility: 'hidden',
          },
        },
        default_quantum_bouncing: {
          '0%': {
            transform: 'scale(1.2)',
            visibility: 'visible',
          },
          '30%': { opacity: '100%', transform: 'scale(1.3)' },
          '100%': { opacity: '100%', transform: 'scale(1)' },
        },
      },
      animation: {
        glass_opacity: 'glass_opacity 1s forwards',
        rolled_div: 'rolled_div 1s forwards',
        shrink_line: 'shrink_line 0.2s forwards',
        bigger_bouncing: 'bigger_bouncing 0.5s forwards',
        fade_out_quantum_bouncing: 'fade_out_quantum_bouncing 1s forwards',
        default_quantum_bouncing: 'default_quantum_bouncing 0.5s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
