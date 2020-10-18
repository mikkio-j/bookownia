import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Slide1 from './Slide1';

export default {
  title: 'Bookownia/Molecules/Slide1',
  component: Slide1,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = () => <Slide1 />;

export const Normal = Template.bind({});
