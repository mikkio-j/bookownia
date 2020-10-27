import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 50px;
  transition: 0.3s;
  cursor: pointer;
  &:hover .overlay {
    opacity: 0.4;
  }
  div {
    text-align: center;
  }
  ${({ altPosition }) =>
    altPosition &&
    css`
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 20px;
      div {
        text-align: left;
        padding: 0 0 0 10px;
      }
    `}
`;

const StyledBookcover = styled.div`
  width: 156px;
  height: 235px;
  position: relative;
  background-image: url(${({ bookCover }) => bookCover});

  background-size: cover;
  transition: 0.3s;
  ${({ small }) =>
    small &&
    css`
      width: 80px;
      height: 117px;
    `}
`;
const StyledColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(255, 170, 113, 1);
  transition: 0.3s;
  ${({ altColor }) =>
    altColor &&
    css`
      background-color: rgba(79, 109, 253, 0.5);
    `}
`;
const StyledText = styled.h5`
  font-size: 24px;
  color: #253b57;
  font-weight: medium;
  padding: 0;
  margin: 0;
  ${({ small }) =>
    small &&
    css`
      font-size: 20px;
      }
    `}
  ${({ altColor }) =>
    altColor &&
    css`
      color: white;
    `}
`;
const StyledDescription = styled.p`
  font-size: 20px;
  color: #acb4bb;
  font-weight: medium;
  padding: 0;
  margin: 0;
  ${({ small }) =>
    small &&
    css`
      font-size: 14px;
      }
    `}
`;
const Book = ({ title, author, price, bookCover, altPosition, showPrice, small, altColor }) => (
  <StyledWrapper altPosition={altPosition} bookCover={bookCover}>
    <StyledBookcover small={small} bookCover={bookCover}>
      <StyledColorOverlay altColor={altColor} small={small} className="overlay" />
    </StyledBookcover>
    <div>
      <StyledText altColor={altColor} small={small}>
        {title}
      </StyledText>
      <StyledDescription small={small}>{author}</StyledDescription>
      {showPrice && <StyledText>{price}zł</StyledText>}
    </div>
  </StyledWrapper>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bookCover: PropTypes.string.isRequired,
  altPosition: PropTypes.bool,
  showPrice: PropTypes.bool,
  small: PropTypes.bool,
  altColor: PropTypes.bool,
};

export default Book;
