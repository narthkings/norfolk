import { extendTheme, theme } from '@chakra-ui/react';

const themes = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  styles: {
    global: {
      '.activeLink': {
        background: '#FEEEE8',
        color: '#B03D12',
      },
      '.PhoneInputInput': {
        outline: 'none !important',
        paddingLeft: '5px !important'
      },
      body: {
        // fontSize: '1.6rem',
        backgroundColor: '#ffffff',
        color: '#484D59',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      '*, *::before, *::after': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
      }
    },
  },
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
      },
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
      },
    },
  },
})
const fontSizes = Object.freeze({
  ...theme.fontSizes,
  xx_smallest: 'small',
  xs: '1rem',
  xs_sm: '1.2rem',
  sm: '1.4rem',
  md: '1.5rem',
  h4: '2rem',
  h3: '2.25rem',
  h2: '3rem',
  h1: '3.75rem',
});
export default extendTheme({
  themes, fontSizes
});
