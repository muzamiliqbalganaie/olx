import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        color1: '#006C54',
      },
      textColor: {
        color2: '#000000',
      },
      borderB: {
        color3: '#D6D6D6',
      },
      bgButton: {
        color4: '#F1F2F6'
      }
    },
  },
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentDispositionType: 'attachment',
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
  plugins: [],
}

export default config;