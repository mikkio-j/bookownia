import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../../atoms/Text/Text';
import Logo from '../../../assets/pictures/logo.png';

const StyledWrapper = styled.section`
  padding: 20px 30px 0;
  margin: 0 auto;
  width: 100%;
  height: 400px;
  align-items: center;
  max-width: 1400px;
  @media (max-width: 1000px) {
    margin-bottom: 300px;
  }

  @media (max-width: 500px) {
    margin-bottom: 500px;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const StyledInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  @media (max-width: 1000px) {
    width: 50%;
    margin-bottom: 20px;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  margin-bottom: 20px;
  margin-top: 50px;
`;
const StyledUnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;
const StyledList = styled.li`
  list-style-type: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 18px;
  margin-bottom: 1px;
`;

const StyledLogo = styled.div`
  width: 300px;
  height: 100%;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
    width: 100%;
    background-size: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
    background-position: 50%;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
const Newsletter = () => (
  <StyledWrapper>
    <StyledInfoWrapper>
      <StyledInfoColumn>
        <StyledText>Warunki zakupów</StyledText>
        <StyledUnorderedList>
          <StyledList>
            <StyledLink>Czas i koszt dostawy</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Wysyłka za granicę</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Reklamacje i zwroty</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Polityka prywatności</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Klauzule informacyjne RODO</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Regulamin</StyledLink>
          </StyledList>
        </StyledUnorderedList>
      </StyledInfoColumn>
      <StyledInfoColumn>
        <StyledText>Informacje</StyledText>
        <StyledUnorderedList>
          <StyledList>
            <StyledLink>O firmie</StyledLink> | <StyledLink>Praca</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Warto nam zaufać!</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>FAQ</StyledLink> | <StyledLink>TAX FREE</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Rabaty dla krwiodawców</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Kody rabatowe i promocje</StyledLink>
          </StyledList>
        </StyledUnorderedList>
      </StyledInfoColumn>
      <StyledInfoColumn>
        <StyledText>Pomoc</StyledText>
        <StyledUnorderedList>
          <StyledList>
            <StyledLink>Wersja mobilna</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Kontakt</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Odbiór osobisty - Warszawa</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Pliki elektroniczne</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink>Masz pocztę w gmailu?</StyledLink>
          </StyledList>
        </StyledUnorderedList>
      </StyledInfoColumn>
      <StyledLogo />
    </StyledInfoWrapper>
  </StyledWrapper>
);

export default Newsletter;
