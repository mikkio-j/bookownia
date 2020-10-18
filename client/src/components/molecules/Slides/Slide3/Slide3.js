import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../atoms/Button/Button';
import BackgroundImage from '../../../../assets/pictures/background.png';
import StudentImage from '../../../../assets/pictures/student.png';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  overflow: hidden;
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 380px;
  background-color: white;
  border-radius: 16px;
  border: 5px solid #ff7171;
`;
const StyledStudentImage = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
  background: url(${StudentImage});
  background-size: contain;
  width: 500px;
  height: 700px;
`;
const StyledText = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  width: 350px;
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 50px;
  font-family: 'Roboto';
  z-index: 1;
`;

const StyledLink = styled(Link)`
  z-index: 9999;
  text-decoration: none;
`;
const Slide2 = () => (
  <StyledWrapper>
    <StyledTextWrapper>
      <StyledText>podręczniki akademickie do -25%</StyledText>
      <StyledLink to="/schoolbooks">
        <Button>sprawdź</Button>
      </StyledLink>
    </StyledTextWrapper>
    <StyledStudentImage />
  </StyledWrapper>
);

export default Slide2;
