import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useEventListener from '@use-it/event-listener';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Book from '../../atoms/Book/Book';
import Input from '../../atoms/Input/Input';
import BookCover from '../../../assets/pictures/book.png';

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  padding: 0 20px;
  @media (max-width: 800px) {
    margin-top: 120px;
  }
  @media (max-width: 760px) {
    margin-top: 120px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledHeading = styled(Heading)`
  @media (max-width: 320px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
const StyledButton = styled(Button)`
  position: relative;
  width: 120px;
  height: 40px;
  font-size: 16px;
  text-transform: lowercase;
  cursor: pointer;
  z-index: 10;
  transition: 0.3s;
  &.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  i {
    margin-left: 5px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 340px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPagination = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-bottom: 100px;
  li {
    font-family: 'Ubuntu';
    font-size: 22px;
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: ${({ theme }) => theme.bold};
    padding: 5px 12px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.9;
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      border-radius: 15px;
    }
  }
`;

const StyledCategoryWrapper = styled.div`
  position: relative;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const StyledCompleteBlock = styled.div`
  display: flex;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 25px;
  font-weight: 400;
  background-color: #ffffff;
  width: 100%;
  border: 1px solid #acb4bb;
  border-top: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 5;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  padding: 10px 0;
  transition: 0.2s;
  p {
    font-family: 'Ubuntu';
    color: #413d51;
    margin: 0;
    padding: 15px 5px;
    text-align: right;
    border-top: 1px solid rgba(0, 0, 0, 0.03);
    transition: 0.2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
      cursor: pointer;
    }
  }
  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledInput = styled(Input)`
  width: 50%;
  height: 40px;
  @media (max-width: 600px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
const BooksGrid = ({ title }) => {
  const [categoryModal, setCategoryModal] = useState(false);
  const categoriesButton = useRef(null);
  const categories = useRef(null);

  const clickHandler = (e) => {
    if (
      categoriesButton.current &&
      !categoriesButton.current.contains(e.target) &&
      !categories.current.contains(e.target)
    ) {
      setCategoryModal(false);
    }
  };
  useEventListener('mousedown', clickHandler);
  return (
    <>
      <StyledHeaderSection>
        <StyledHeading>{title}</StyledHeading>
        <StyledInput search placeholder="Szukaj książek..." />
        <StyledCategoryWrapper>
          <StyledButton
            ref={categoriesButton}
            onClick={() => setCategoryModal(!categoryModal)}
            className={categoryModal && 'active'}
          >
            kategorie <i className="fas fa-angle-down" />
          </StyledButton>
          <StyledCompleteBlock ref={categories} className={categoryModal && 'active'}>
            <StyledLink>
              <p>Bestsellery</p>
            </StyledLink>
            <StyledLink>
              <p>Kryminały</p>
            </StyledLink>
            <StyledLink>
              <p>Fantastyka</p>
            </StyledLink>
            <StyledLink>
              <p>Reportaż</p>
            </StyledLink>
            <StyledLink>
              <p>Dla dzieci</p>
            </StyledLink>
            <StyledLink>
              <p>Kulinaria</p>
            </StyledLink>
          </StyledCompleteBlock>
        </StyledCategoryWrapper>
      </StyledHeaderSection>
      <StyledGrid>
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
        <Book bookCover={BookCover} title="Lockdown" author="Robert Ziębiński" price={25} />
      </StyledGrid>
      <StyledPagination>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </StyledPagination>
    </>
  );
};

BooksGrid.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BooksGrid;
