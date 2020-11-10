import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import BookItem from '../components/organisms/BookItem/BookItem';
import BestsellersSlider from '../components/organisms/BestsellersSlider/BestsellersSlider';

const BookView = () => (
  <>
    <MainTemplate>
      <BookItem />
      <BestsellersSlider />
    </MainTemplate>
  </>
);

export default BookView;
