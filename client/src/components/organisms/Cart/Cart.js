import React from 'react';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';
import BookCover from '../../../assets/pictures/book1.jpg';
import Book from '../../atoms/Book/Book';
// import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';

const StyledTableHeader = styled.div`
  margin-top: 50px;
  width: 100%;
  border-bottom: 3px solid #253b57;
  display: grid;
  grid-template-columns: 70% 3fr 3fr 0.1fr;
  div {
    font-weight: 400;
  }
`;
const StyledProductWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 70% 3fr 3fr 0.11fr;
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
  </>
);

export default Cart;
