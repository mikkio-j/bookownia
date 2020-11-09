import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Book from '../../atoms/Book/Book';
import BookCover from '../../../assets/pictures/book.png';

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  @media (max-width: 800px) {
    margin-top: 120px;
  }
  @media (max-width: 760px) {
    margin-top: 120px;
  }
`;

const StyledButton = styled(Button)`
  width: 120px;
  height: 40px;
  font-size: 16px;
  text-transform: lowercase;
  cursor: pointer;
  i {
    margin-left: 5px;
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

const BooksGrid = ({ title }) => (
  <>
    <StyledHeaderSection>
      <Heading>{title}</Heading>
      <StyledButton>
        kategorie <i className="fas fa-angle-down" />
      </StyledButton>
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

BooksGrid.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BooksGrid;
