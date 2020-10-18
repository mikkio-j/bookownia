import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Slide3 from './Slide3';

export default {
  title: 'Bookownia/Molecules/Slide3',
  component: Slide3,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = () => <Slide3 />;

export const Normal = Template.bind({});
