import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
}
html {
    font-size: 62.5%;
    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }
    &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    &::-webkit-scrollbar-thumb {
    background: #ffaa71;
    border: 0px none #ffffff;
    border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb:hover {
    background: #ff822e;
    }
    &::-webkit-scrollbar-thumb:active {
    background: #ffaa71;
    }
    &::-webkit-scrollbar-track {
    background: #e6e6e6;
    border: 0px none #3d3d3d;
    border-radius: 0px;
    }
    &::-webkit-scrollbar-track:hover {
    background: #e9e7e7;
    }
    &::-webkit-scrollbar-track:active {
    background: #e9e7e7;
    }
    &::-webkit-scrollbar-corner {
    background: transparent;
    }
}
body {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    background: #fff;
    
}
`;

export default GlobalStyle;
