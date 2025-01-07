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
        custom1: '#000000',
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