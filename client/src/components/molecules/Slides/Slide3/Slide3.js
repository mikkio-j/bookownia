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
  @media (max-width: 800px) {
    height: calc(100vh - 200px);
  }
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
  z-index: 9999;
  @media (max-width: 800px) {
    position: static;
    margin: 0 auto;
    margin-top: 50px;
    width: 90%;
    height: 180px;
    padding: 0 20px;
  }
  @media (max-width: 320px) {
    margin-top: 10px;
    height: 150px;
  }
`;
const StyledStudentImage = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
  background: url(${StudentImage});
  background-size: contain;
  width: 500px;
  height: 700px;
  @media (max-width: 800px) {
    width: 300px;
    height: 700px;
    bottom: -350px;
  }
  @media (max-width: 365px) {
    display: none;
  }
`;
const StyledText = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  width: 350px;
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 50px;
  font-family: 'Roboto';
  z-index: 1;
  @media (max-width: 800px) {
    width: 100%;
    font-size: 26px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  z-index: 9999;
  text-decoration: none;
  @media (max-width: 800px) {
    left: 0;
    width: 100%;
    bottom: 50px;
  }
`;
const StyledButton = styled(Button)`
  @media (max-width: 800px) {
    width: 80%;
    height: 50px;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    width: 60%;
    height: 30px;
    margin: 0 auto;
    font-size: 16px;
  }
`;
const Slide2 = () => (
  <StyledWrapper>
    <StyledTextWrapper>
      <StyledText>podręczniki akademickie do -25%</StyledText>
      <StyledLink to="/schoolbooks">
        <StyledButton>sprawdź</StyledButton>
      </StyledLink>
    </StyledTextWrapper>
    <StyledStudentImage />
  </StyledWrapper>
);

export default Slide2;
