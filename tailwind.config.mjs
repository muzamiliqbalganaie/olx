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
        color3: '#054537'
      },
      borderColor: {
        color1: '#006C54',
        color2: '#000000',
        color3: '#D6D6D6',
      },
      backgroundColor: {
        color1: '#006C54',
        color2: '#000000',
        color3: '#054537',
        color4: '#F1F2F6',
      },
      dropShadow: {
        'glow': '0 0 200px rgb(0, 204, 128)',
      },
      scrollbar: ['rounded'],
      backgroundOpacity: {
        '27': '0.27',
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