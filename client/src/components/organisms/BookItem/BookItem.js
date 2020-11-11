import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import NumericInput from 'react-numeric-input';
import BookCover from '../../../assets/pictures/book1.jpg';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';

const StyledSection = styled.section`
  width: 100%;
  background-color: #faf9fd;
  font-family: 'Ubuntu', sans-serif;
  min-height: 500px;
  padding: 50px 0;
  @media (max-width: 800px) {
    margin-top: 120px;
  }
  @media (max-width: 760px) {
    margin-top: 80px;
  }
  .description {
    width: 90%;
    margin: 70px auto;
  }
`;

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledBookWrapper = styled.div`
  display: flex;
  @media (max-width: 660px) {
    margin-bottom: 50px;
  }
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledBookCover = styled.div`
  height: 300px;
  width: 200px;
  background-image: url(${BookCover});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    min-height: 250px;
    min-width: 180px;
  }
`;

const StyledBookDetails = styled.div`
  margin-left: 20px;
  @media (max-width: 390px) {
    text-align: center;
    margin-left: 0;
  }
`;

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
  .input__number {
    width: 80%;
  }
`;
const StyledHeading = styled(Heading)`
  ${({ title }) =>
    title &&
    css`
      font-weight: 500;
      font-size: 36px;
    `}
  ${({ author }) =>
    author &&
    css`
      color: #acb4bb;
      font-size: 24px;
      margin-bottom: 20px;
    `}
  ${({ price }) =>
    price &&
    css`
      text-align: center;
      font-size: 24px;
    `}

  ${({ number }) =>
    number &&
    css`
      font-size: 30px;
      font-weight: 700;
    `}
    ${({ description }) =>
    description &&
    css`
      font-size: 18px;
      font-weight: 400;
    `}
`;

const StyledText = styled(Text)`
  font-weight: 400;
  span.green {
    color: #10a531;
    font-weight: 500;
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

const BookItem = () => {
  const [bookQuantity, setBookQuantity] = useState(1);
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledBookWrapper>
          <StyledBookCover />
          <StyledBookDetails>
            <StyledHeading title>Ulotne nadzieje</StyledHeading>
            <StyledHeading author>autor: Gill Paul</StyledHeading>
            <StyledText>wydawnictwo: Mando</StyledText>
            <StyledText>rok wydania: 2020</StyledText>
            <StyledText>ilość stron: 408</StyledText>
            <StyledText>
              wysyłka w <span className="green">3 dni</span>
            </StyledText>
          </StyledBookDetails>
        </StyledBookWrapper>
        <StyledAddToCartWrapper>
          <h6>Książka, miękka oprawka</h6>
          <div className="price--wrapper">
            <div>
              <StyledHeading price>Cena</StyledHeading>
              <StyledHeading price number>
                29,90 zł
              </StyledHeading>
            </div>

            <NumericInput
              mobile
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="9"
              value={bookQuantity}
              onChange={(valueAsNumber) => setBookQuantity(valueAsNumber)}
              style={{
                wrap: {
                  width: '80%',
                },
                input: {
                  width: '100%',
                },
                'input:focus': {
                  border: '1px solid #FFAA71',
                  outline: 'none',
                },
              }}
            />

            <StyledButton>dodaj do koszyka</StyledButton>
          </div>
        </StyledAddToCartWrapper>
      </StyledWrapper>
      <div className="description">
        <StyledHeading title>Opis:</StyledHeading>
        <StyledHeading description>
          Lucy poznaje na przyjęciu czarującego oficera, który zakochuje się w niej od pierwszego
          wejrzenia. Wbrew rodzinie decyduje się na szybki ślub, aby jako żona mogła towarzyszyć
          ukochanemu na froncie. Gdy Lucy dociera na Krym ze swoim przystojnym i porywczym mężem,
          jest przerażona tym, co ją spotyka. Z naiwnej dziewczyny musi się nagle zmienić w dojrzałą
          kobietę. Dorothea martwi się o młodszą siostrę, z którą od dłuższego czasu nie ma
          kontaktu. Postanawia wyjechać na wojnę jako pielęgniarka, aby służyć krajowi i odnaleźć
          Lucy. Czy jej się to uda? Odwaga, tchórzostwo, niebezpieczeństwo, pasja, miłość i
          namiętność – a to wszystko w przerażającej scenerii wojny.{' '}
        </StyledHeading>
      </div>
    </StyledSection>
  );
};

export default BookItem;
