import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon/Icon';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin-top: 50px;
  padding: 20px 0;
  flex-wrap: nowrap;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const IconSection = () => (
  <StyledWrapper>
    <Icon header="Darmowa wysyłka" description="dostawa w 3 dni" />
    <Icon sale header="Promocje i Wyprzedaże" description="Do każdego zamówienia" />
    <Icon service header="Obsługa klienta" description="dostępna 24/7" />
    <Icon payments header="Bezpieczne Płatności" description="szybkie i bezpieczne przelewy" />
  </StyledWrapper>
);

export default IconSection;
