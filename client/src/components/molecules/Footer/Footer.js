import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';
import Logo from '../../atoms/Logo/Logo';
import Logos from '../../../assets/pictures/loga.png';

const StyledWrapper = styled.section`
  padding: 20px 30px 0;
  margin: 0 auto;
  width: 100%;
  height: 400px;
  align-items: center;
  max-width: 1400px;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
`;

const StyledInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  margin-bottom: 20px;
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
const StyledPicture = styled.div`
  background-image: url(${Logos});
  background-size: contain;
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
`;
const StyledLogo = styled(Logo)`
  width: 150px;
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
    <StyledText>Współpracujemy z:</StyledText>
    <StyledPicture />
  </StyledWrapper>
);

export default Newsletter;
