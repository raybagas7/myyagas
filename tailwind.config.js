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
      backgroundImage: {
        'main-bg': "url('/public/images/main-bg.png')",
      },
      height: {
        screen: '100vh',
        'half-screen': '50vh',
      },
      colors: {
        'black-steam': '#161b22',
        'red-fancy': '#e41f25',
        'purple-light-fancy': '#8350c3',
        'purple-dark-fancy': '#40267d',
        'orange-fancy': '#f58216',
        'yellow-fancy': '#ffff00',
        'gold-fancy': '#ffd400',
        'purple-fancy': '#9d4edd',
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
