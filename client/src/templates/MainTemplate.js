import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import Theme from '../theme/Theme';
import Navbar from '../components/organisms/Navbar/Navbar';
import Slider from '../components/organisms/Slider/Slider';
import IconSection from '../components/molecules/IconSection/IconSection';
import BestsellersSlider from '../components/organisms/BestsellersSlider/BestsellersSlider';

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
        <Navbar />
        <Slider />
        <IconSection />
        <BestsellersSlider />
      </StyledWrapper>
    </ThemeProvider>
  </>
);

export default MainTemplate;
