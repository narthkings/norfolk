import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: {
            25: '#fafafb',
            50: '#f5f6f6',
            100: '#ecedee',
            200: '#c4c5c9',
            300: '#9b9ea4',
            400: '#565b66',
            500: '#484d59',
            600: '#3c424e',
            700: '#2b313f',
            800: '#1d2432',
            900: '#111827',
          },
          base: {
            25: '#FFFBFA',
            50: '#feeee8',
            100: '#fdcbb8',
            200: '#fcb195',
            300: '#fa8e65',
            400: '#f97847',
            500: '#f85619',
            600: '#e24e17',
            700: '#b03d12',
            800: '#882f0e',
            900: '#68240b',
          },
          error: {
            25: '#FFFBFA',
            50: '#FEF3F2',
            100: '#FEE4E2',
            200: '#FECDCA',
            300: '#FDA29B',
            400: '#F97066',
            500: '#F04438',
            600: '#D92D20',
            700: '#B42318',
            800: '#912018',
            900: '#7A271A',
          },
          success: {
            25: '#F6FEF9',
            50: '#ECFDF3',
            100: '#D1FADF',
            200: '#A6F4C5',
            300: '#6CE9A6',
            400: '#32D583',
            500: '#12B76A',
            600: '#039855',
            700: '#027A48',
            800: '#05603A',
            900: '#054F31',
          }
        },
        secondary: {
          blueGray: {
            25: '#FCFCFD',
            50: '#F8F9FC',
            100: '#EAECF5',
            200: '#C8CCE5',
            300: '#9EA5D1',
            400: '#717BBC',
            500: '#4E5BA6',
            600: '#3E4784',
            700: '#363F72',
            800: '#293056',
            900: '#101323',
          }
        }
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.3rem',
        '8': '2rem',
        '10': '2.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '33': '8.25rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xs': '.75rem', //12px
        'sm': '.875rem', //14px
        'base': '1rem', //16px
        'lg': '1.125rem', //18px
        'xl': '1.25rem', //20px
        '2xl': '1.5rem', //24px
        '3xl': '1.875rem', //30px
        '4xl': '2.25rem', //36px
        '5xl': '3rem', //48px
        '6xl': '3.75rem', //60px
        '7xl': '4.5rem', //72px
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
