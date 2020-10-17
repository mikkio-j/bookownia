import React from 'react';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme/Theme';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  withThemeProvider,
];
