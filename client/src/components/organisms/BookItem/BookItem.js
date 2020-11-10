import React from 'react';
import styled from 'styled-components';
import BookCover from '../../../assets/pictures/book.png';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';

const StyledSection = styled.section`
  width: 100%;
  background-color: #faf9fd;
  font-family: 'Ubuntu', sans-serif;
  min-height: 500px;
  padding: 50px 0;
`;

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const StyledBookWrapper = styled.div`
  display: flex;
`;

const StyledBookCover = styled.div`
  height: 360px;
  width: 240px;
  background-image: url(${BookCover});
  background-size: cover;
`;

const StyledBookDetails = styled.div``;

const StyledAddToCartWrapper = styled.div`
  width: 270px;
  height: 360px;
  background-color: #ff7171;
  border-radius: 17px;
  h6 {
    margin: 20px 0 30px 0;
    text-align: center;
    font-family: Ubuntu;
    font-weight: 400;
    font-size: 18px;
    color: white;
  }
  .price--wrapper {
    width: 80%;
    height: 240px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const StyledButton = styled.button`
  background-color: #ffaa71;
  width: 170px;
  height: 40px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 6px;
`;

const BookItem = () => (
  <StyledSection>
    <StyledWrapper>
      <StyledBookWrapper>
        <StyledBookCover />
        <StyledBookDetails>
          <Heading>Ulotne nadzieje</Heading>
          <Heading>autor: Gill Paul</Heading>
          <Text>wydawnictwo: Mando</Text>
          <Text>rok wydania: 2020</Text>
          <Text>ilość stron: 408</Text>
          <Text>wysyłka w 3 dni</Text>
        </StyledBookDetails>
      </StyledBookWrapper>
      <StyledAddToCartWrapper>
        <h6>Książka, miękka oprawka</h6>
        <div className="price--wrapper">
          <div>
            <Heading>Cena</Heading>
            <Heading>29,90 zł</Heading>
          </div>
          <input type="number" id="quantity" name="quantity" min="1" max="9" value="1" />
          <StyledButton>dodaj do koszyka</StyledButton>
        </div>
      </StyledAddToCartWrapper>
    </StyledWrapper>
    <p>Opis:</p>
    <p>
      Lucy poznaje na przyjęciu czarującego oficera, który zakochuje się w niej od pierwszego
      wejrzenia. Wbrew rodzinie decyduje się na szybki ślub, aby jako żona mogła towarzyszyć
      ukochanemu na froncie. Gdy Lucy dociera na Krym ze swoim przystojnym i porywczym mężem, jest
      przerażona tym, co ją spotyka. Z naiwnej dziewczyny musi się nagle zmienić w dojrzałą kobietę.
      Dorothea martwi się o młodszą siostrę, z którą od dłuższego czasu nie ma kontaktu. Postanawia
      wyjechać na wojnę jako pielęgniarka, aby służyć krajowi i odnaleźć Lucy. Czy jej się to uda?{' '}
      Odwaga, tchórzostwo, niebezpieczeństwo, pasja, miłość i namiętność – a to wszystko w
      przerażającej scenerii wojny.{' '}
    </p>
  </StyledSection>
);

export default BookItem;
