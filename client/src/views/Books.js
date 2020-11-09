import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import BooksGrid from '../components/organisms/BooksGrid/BooksGrid';

const BooksView = () => (
  <>
    <MainTemplate>
      <BooksGrid title="Książki" />
    </MainTemplate>
  </>
);

export default BooksView;
