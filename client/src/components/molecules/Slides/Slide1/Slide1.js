import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../atoms/Button/Button';
import ScientistVector from '../../../../assets/pictures/scientist.svg';
import BoyReadingVector from '../../../../assets/pictures/boy_reading.svg';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  overflow: hidden;
  @media (max-width: 800px) {
    height: calc(100vh - 220px);
  }
`;
const StyledHeaderText = styled.h2`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.bold};
  font-size: 50px;
  font-family: 'Roboto';
  z-index: 1;
  left: 250px;
  top: 50px;
  transform: translateX(-15%);
  overflow: hidden;
  @media (max-width: 800px) {
    left: 0;
    width: 100%;
    transform: translateX(0);
    text-align: center;
    font-size: 36px;
    top: auto;
    bottom: 120px;
  }
`;

const StyledBackgroundScientist = styled.div`
  top: 0;
  left: 50px;
  position: absolute;
  background: url(${ScientistVector});
  background-size: cover;
  width: 700px;
  height: 700px;
  @media (max-width: 800px) {
    display: none;
  }
`;
const StyledBackgroundBoy = styled.div`
  position: absolute;
  bottom: -30px;
  right: -50px;
  background: url(${BoyReadingVector});
  background-size: 100%;
  width: 1000px;
  height: 700px;
  @media (max-width: 800px) {
    width: 400px;
    position: static;
    width: 100%;
    /* right: 0;
    left: -50px;
    bottom: 0px;*/
    background-repeat: no-repeat;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  z-index: 9999;
  text-decoration: none;
  left: 250px;
  bottom: 100px;
  @media (max-width: 800px) {
    left: 0;
    width: 100%;
    bottom: 50px;
  }
`;
const StyledButton = styled(Button)`
  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto;
  }
`;
const Slide1 = () => (
  <StyledWrapper>
    <StyledBackgroundScientist />
    <StyledBackgroundBoy />
    <StyledHeaderText>Przygotuj się na jesień!</StyledHeaderText>

    <StyledLink to="/books">
      <StyledButton>sprawdź</StyledButton>
    </StyledLink>
  </StyledWrapper>
);

export default Slide1;
