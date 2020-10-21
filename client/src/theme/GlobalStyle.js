import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;
}
body {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    background: #fff;
    @media (max-width: 800px) {
    padding-top: 120px;
  }
  @media (max-width: 475px) {
    padding-top: 80px;
  }
}
`;

export default GlobalStyle;
