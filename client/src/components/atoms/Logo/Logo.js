import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../../../assets/logo.png';

const StyledHeader = styled.header`
  width: 425px;
  height: 120px;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 150px;
    height: 70px;
  }
`;

const StyledHeaderText = styled.h1`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 30%;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = () => (
  <StyledLink to="/">
    <StyledHeader>
      <StyledImage src={LogoImage} alt="Logo" />
      <StyledHeaderText>bookownia.pl</StyledHeaderText>
    </StyledHeader>
  </StyledLink>
);

export default Logo;
