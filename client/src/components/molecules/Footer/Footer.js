import React from 'react';
import styled from 'styled-components';
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
  height: 80px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    background-position: 50%;
  }
`;
const Newsletter = () => (
  <StyledWrapper>
    <StyledInfoWrapper>
      <StyledInfoColumn>
        <StyledText>Warunki zakupów</StyledText>
        <StyledUnorderedList>
          <StyledList>Czas i koszt dostawy</StyledList>
          <StyledList>Wysyłka za granicę</StyledList>
          <StyledList>Reklamacje i zwroty</StyledList>
          <StyledList>Polityka prywatności</StyledList>
          <StyledList>Klauzule informacyjne RODO</StyledList>
          <StyledList>Regulamin</StyledList>
        </StyledUnorderedList>
      </StyledInfoColumn>
      <StyledInfoColumn>
        <StyledText>Informacje</StyledText>
        <StyledUnorderedList>
          <StyledList>O firmie | Praca</StyledList>
          <StyledList>Warto nam zaufać!</StyledList>
          <StyledList>FAQ | TAX FREE</StyledList>
          <StyledList>Rabaty dla krwiodawców</StyledList>
          <StyledList>Kody rabatowe i promocje</StyledList>
        </StyledUnorderedList>
      </StyledInfoColumn>
      <StyledInfoColumn>
        <StyledText>Pomoc</StyledText>
        <StyledUnorderedList>
          <StyledList>Wersja mobilna</StyledList>
          <StyledList>Kontakt</StyledList>
          <StyledList>Odbiór osobisty - Warszawa</StyledList>
          <StyledList>Pliki elektroniczne</StyledList>
          <StyledList>Masz pocztę w gmailu?</StyledList>
        </StyledUnorderedList>
      </StyledInfoColumn>
      <StyledLogo />
    </StyledInfoWrapper>
  </StyledWrapper>
);

export default Newsletter;
