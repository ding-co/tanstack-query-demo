import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

console.log(fontFamily);

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'macaroni-and-cheese': {
          '50': '#fff6ed',
          '100': '#ffecd5',
          '200': '#ffd4a9',
          '300': '#febd81',
          '400': '#fc8c3b',
          '500': '#fa6c15',
          '600': '#eb510b',
          '700': '#c33b0b',
          '800': '#9b3011',
          '900': '#7d2a11',
          '950': '#431207',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--noto-sans-kr)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
