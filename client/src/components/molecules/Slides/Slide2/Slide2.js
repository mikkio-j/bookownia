import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../atoms/Button/Button';
import BooksImage from '../../../../assets/pictures/books.png';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background-image: url(${BooksImage});
  background-size: cover;
  overflow: hidden;
  @media (max-width: 800px) {
    height: calc(100vh - 200px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BooksImage});
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: 100px;
  z-index: 9999;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    margin-top: 0px;
  }
`;
const StyledHeaderText = styled.h2`
  color: white;
  font-weight: ${({ theme }) => theme.thin};
  font-size: 50px;
  font-family: 'Roboto';
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 36px;
  }
  @media (max-width: 320px) {
    font-size: 26px;
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
    font-size: 36px;
  }
  @media (max-width: 800px) {
    font-size: 36px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  z-index: 9999;
  text-decoration: none;
  @media (max-width: 320px) {
    left: 0;
    width: 100%;
    bottom: 50px;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 320px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    height: 50px;
  }
`;
const Slide2 = () => (
  <StyledWrapper>
    <StyledTextWrapper>
      <StyledHeaderText>Powrót do szkoły!</StyledHeaderText>
      <StyledText>podręczniki szkolne do -25%</StyledText>
      <StyledLink to="/schoolbooks">
        <StyledButton>sprawdź</StyledButton>
      </StyledLink>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default Slide2;
