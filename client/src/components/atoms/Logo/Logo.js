import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../../assets/logo.png';

const StyledHeader = styled.header`
  width: 425px;
  height: 130px;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.device.mobileM} {
    width: 200px;
    height: 70px;
  }
`;

const StyledHeaderText = styled.h1`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};

  @media ${({ theme }) => theme.device.mobileM} {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;

const StyledImage = styled.img`
  width: 30%;
  object-fit: contain;
`;

const Logo = () => (
  <StyledHeader>
    <StyledImage src={LogoImage} alt="Logo" />
    <StyledHeaderText>bookownia.pl</StyledHeaderText>
  </StyledHeader>
);

export default Logo;
