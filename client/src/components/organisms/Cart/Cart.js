import React from 'react';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';
import BookCover from '../../../assets/pictures/book1.jpg';
import Book from '../../atoms/Book/Book';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import RadioForm from '../../molecules/RadioForm/RadioForm';

const deliveryOptions = [
  { name: 'paczkomaty', text: 'Paczkomaty 24/7', price: 8.99 },
  { name: 'punkt', text: 'Odbiór paczki w punkcie', price: 6.99 },
  { name: 'poczta', text: 'Paczka pocztowa', price: 9.99 },
  { name: 'dhl', text: 'Kurier - DHL', price: 11.99 },
];

const paymentOptions = [
  { name: 'card', text: 'Szybkie płatności online i kartą', price: 0 },
  { name: 'transfer', text: 'Odbiór paczki w punkcie', price: 0 },
];

const StyledTableHeader = styled.div`
  margin-top: 50px;
  width: 100%;
  border-bottom: 3px solid #253b57;
  display: grid;
  grid-template-columns: 70% 3fr 3fr 0.1fr;
  @media (max-width: 850px) {
    grid-template-columns: 50% 2fr 2fr 0.11fr;
  }
  div {
    font-weight: 400;
  }
`;
const StyledProductWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 70% 3fr 3fr 0.11fr;
  @media (max-width: 850px) {
    grid-template-columns: 50% 3fr 3fr 0.11fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 50% 2fr 2fr 0.11fr;
  }
  .input__number {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }
  p {
    margin: 0;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #253b57;
    font-family: 'Ubuntu', sans-serif;
  }
  .fa-trash {
    display: flex;
    align-items: center;
    font-size: 30px;
    padding-bottom: 20px;
    color: #ff7171;
  }
`;
const StyledOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 800px) {
    margin: 50px 0;
    align-items: center;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 250px;
  height: 50px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const Cart = () => (
  <>
    <StyledTableHeader>
      <Text>Nazwa produktu</Text>
      <Text>Ilość sztuk</Text>
      <Text>Cena</Text>
    </StyledTableHeader>
    <StyledProductWrapper>
      <Book bookCover={BookCover} title="Ulotne nadzieje" author="Gill Paul" altPosition small />
      <div className="input__number">
        <NumericInput
          mobile
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="9"
          value="1"
          style={{
            wrap: {
              width: '70%',
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
      </div>
      <p>25zł</p>
      <i className="fas fa-trash" />
    </StyledProductWrapper>
    <StyledProductWrapper>
      <Book bookCover={BookCover} title="Ulotne nadzieje" author="Gill Paul" altPosition small />
      <div className="input__number">
        <NumericInput
          mobile
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="9"
          value="1"
          style={{
            wrap: {
              width: '70%',
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
      </div>
      <p>25zł</p>
      <i className="fas fa-trash" />
    </StyledProductWrapper>
    <StyledOptionsWrapper>
      <RadioForm title="Wybierz sposób wysyłki" options={deliveryOptions} />
      <RadioForm title="Wybierz sposób płatności" options={paymentOptions} />
    </StyledOptionsWrapper>
    <StyledSummaryWrapper>
      <Text>dostawa: 8.99 zł</Text>
      <Heading>Suma: 58.99 zł</Heading>
      <StyledButton>Przejdź dalej</StyledButton>
    </StyledSummaryWrapper>
  </>
);

export default Cart;
