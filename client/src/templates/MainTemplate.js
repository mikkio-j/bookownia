import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import Theme from '../theme/Theme';
import Navbar from '../components/organisms/Navbar/Navbar';
import Slider from '../components/organisms/Slider/Slider';
import SearchForm from '../components/molecules/SearchForm/SearchForm';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
const MainTemplate = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <StyledWrapper>
        <SearchForm />
        <Navbar />
        <Slider />
      </StyledWrapper>
    </ThemeProvider>
  </>
);

export default MainTemplate;
