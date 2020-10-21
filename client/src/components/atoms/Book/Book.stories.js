import React from 'react';
import Book from './Book';
import BookCover from '../../../assets/pictures/book.png';

export default {
  title: 'Bookownia/Atoms/Book',
  component: Book,
};

const Template = (args) => <Book {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  bookCover: BookCover,
  title: 'Lockdown',
  author: 'Robert Ziębiński',
  price: 25,
};
