import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        sisal: {
          '50': '#f8f7f4',
          '100': '#eeece6',
          '200': '#dcd8cc',
          '300': '#ccc5b6',
          '400': '#ada08a',
          '500': '#9c8b73',
          '600': '#8f7c67',
          '700': '#786656',
          '800': '#62544a',
          '900': '#51453d',
          '950': '#2a2420',
        },
        eclipse: {
          '50': '#faf7ec',
          '100': '#f3eace',
          '200': '#e8d4a0',
          '300': '#dbb769',
          '400': '#cf9c40',
          '500': '#c08632',
          '600': '#a56929',
          '700': '#844e24',
          '800': '#6f4024',
          '900': '#5f3724',
          '950': '#30180f',
        },
        kabul: {
          '50': '#f6f3f0',
          '100': '#e8e2d9',
          '200': '#d3c6b5',
          '300': '#b9a48b',
          '400': '#a4876b',
          '500': '#95775d',
          '600': '#80614e',
          '700': '#684c41',
          '800': '#58413b',
          '900': '#4d3a36',
          '950': '#2c1e1c',
        },
      },
      fontFamily: {
        sans: ['var(--noto-sans-kr)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
