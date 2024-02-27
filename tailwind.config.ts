import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    colors: {
      white: {
        '50': '#ffffff',
        '100': '#f6f6f6',
        '150': '#f8f8f8',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#000000',
      },
      blue: {
        '50': '#edf9ff',
        '100': '#d7f0ff',
        '200': '#b9e6ff',
        '300': '#88d9ff',
        '400': '#50c1ff',
        '500': '#28a2ff',
        '600': '#1989ff',
        '700': '#0a6ceb',
        '800': '#0f56be',
        '900': '#134c95',
        '950': '#112f5a',
      },
      yellow: {
        '50': '#feffe7',
        '100': '#fbffc1',
        '200': '#fbff86',
        '300': '#fffd41',
        '400': '#fff00d',
        '500': '#ffe200',
        '600': '#ffce00',
        '650': '#F79E1B',
        '700': '#a67802',
        '800': '#895d0a',
        '900': '#744c0f',
        '950': '#442804',
      },
      green: {
        '50': '#f6ffe4',
        '100': '#eaffc5',
        '200': '#d5ff91',
        '300': '#b6ff52',
        '400': '#98fd1e',
        '500': '#78e300',
        '600': '#5ab600',
        '700': '#4a9501',
        '800': '#386c08',
        '900': '#315b0c',
        '950': '#163300',
      },
      red: {
        '50': '#fff0f0',
        '100': '#ffdddd',
        '200': '#ffc1c1',
        '300': '#ff9595',
        '400': '#ff5959',
        '500': '#ff2626',
        '600': '#fc0606',
        '650': '#EB001B',
        '700': '#d50000',
        '750': '#EF3349',
        '800': '#af0505',
        '900': '#900c0c',
        '950': '#500000',
      },
      orange: {
        '700': '#CE6C09',
      },
      aquaGreen: {
        '300': '#37C17E',
      },
    },
  },
  plugins: [],
};

export default config;
