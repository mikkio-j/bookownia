const theme = {
  colors: {
    primary: '#FF7171',
    secondary: '#FFAA71',
    tertiary: '#253B57',
    lightgray: '#ACB4BB',
    darkgray: '#404040',
    lightBackground: '#FAF9FD',
  },
  thin: 100,
  light: 300,
  regular: 400,
  bold: 700,
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    s: '1.8rem',
    m: '2.1rem',
    l: '2.6rem',
    xl: '4rem',
    xxl: '4.8rem',
  },
  size: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
    desktopL: '2560px',
  },
  device: {
    mobileS: () => `(max-width: ${theme.size.mobileS})`,
    mobileM: () => `(max-width: ${theme.size.mobileM})`,
    mobileL: () => `(max-width: ${theme.size.mobileL})`,
    tablet: () => `(max-width: ${theme.size.tablet})`,
    laptop: () => `(max-width: ${theme.size.laptop})`,
    laptopL: () => `(max-width: ${theme.size.laptopL})`,
    desktop: () => `(max-width: ${theme.size.desktop})`,
    desktopL: () => `(max-width: ${theme.size.desktop})`,
  },
};

export default theme;