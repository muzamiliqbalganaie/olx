import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        color1: '#006C54',
        color2: '#000000',
        color3: '#054537',
        color4: '#6D6D6D'

      },
      borderColor: {
        color1: '#006C54',
        color2: '#000000',
        color3: '#D6D6D6',
        color4: 'rgba(214, 214, 214, 1)'
      },
      backgroundColor: {
        color1: '#006C54',
        color2: '#000000',
        color3: '#054537',
        color4: '#F1F2F6',
        color5: '#F9F9F9'

      },
      dropShadow: {
        'glow': '0 0 200px rgb(0, 204, 128)',
      },
      boxShadow: {
        'bs1': '0px 0px 30px 0px #0000004D;',
      },
      scrollbar: ['rounded'],
      backgroundOpacity: {
        '27': '0.27',
      },
      backgroundImage: {
        'gradiant-overlay': "linear-gradient(180deg, rgba(0, 108, 84, 0.27) 0%, rgba(0, 108, 84, 0.27) 100%,url('/pbg-head.jpg'))",
      },
      colors: {
        'fromColor': 'rgb(230, 240, 238,1)',
        'toColor': 'rgba(255, 255, 255, 1)',
        'fromColor1': 'rgba(0, 108, 84, 1)',
        'toColor1': 'rgba(255, 255, 255, 1)',
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

export default config;