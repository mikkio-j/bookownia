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
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: 100px;
`;
const StyledHeaderText = styled.h2`
  color: white;
  font-weight: ${({ theme }) => theme.thin};
  font-size: 50px;
  font-family: 'Roboto';
  z-index: 1;
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
      <StyledHeaderText>Powrót do szkoły!</StyledHeaderText>
      <StyledText>podręczniki szkolne do -25%</StyledText>
      <StyledLink to="/schoolbooks">
        <Button>sprawdź</Button>
      </StyledLink>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default Slide2;
