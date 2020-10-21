import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 50px;
`;

const StyledBookcover = styled.div`
  width: 156px;
  height: 235px;
  background-image: url(${({ bookCover }) => bookCover});
  background-size: cover;
`;

const StyledText = styled.h5`
  font-size: 24px;
  color: #253b57;
  font-weight: medium;
  padding: 0;
  margin: 0;
`;
const StyledDescription = styled.p`
  font-size: 20px;
  color: #acb4bb;
  font-weight: medium;
  padding: 0;
  margin: 0;
`;
const Book = ({ title, author, price, bookCover }) => (
  <StyledWrapper>
    <StyledBookcover bookCover={bookCover} />
    <StyledText>{title}</StyledText>
    <StyledDescription>{author}</StyledDescription>
    <StyledText>{price}zł</StyledText>
  </StyledWrapper>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bookCover: PropTypes.string.isRequired,
};

export default Book;
