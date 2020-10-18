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
`;

const StyledBackgroundScientist = styled.div`
  top: 0;
  left: 50px;
  position: absolute;
  background: url(${ScientistVector});
  background-size: cover;
  width: 700px;
  height: 700px;
`;
const StyledBackgroundBoy = styled.div`
  position: absolute;
  bottom: -30px;
  right: -50px;
  background: url(${BoyReadingVector});
  background-size: 100%;
  width: 1000px;
  height: 700px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  z-index: 9999;
  text-decoration: none;
  left: 250px;
  bottom: 100px;
`;
const Slide1 = () => (
  <StyledWrapper>
    <StyledBackgroundScientist />
    <StyledBackgroundBoy />
    <StyledHeaderText>Przygotuj się na jesień!</StyledHeaderText>

    <StyledLink to="/books">
      <Button>sprawdź</Button>
    </StyledLink>
  </StyledWrapper>
);

export default Slide1;
