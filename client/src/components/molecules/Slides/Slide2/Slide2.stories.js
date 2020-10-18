import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Slide2 from './Slide2';

export default {
  title: 'Bookownia/Molecules/Slide2',
  component: Slide2,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = () => <Slide2 />;

export const Normal = Template.bind({});
