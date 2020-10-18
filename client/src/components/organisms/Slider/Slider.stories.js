import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Slider from './Slider';

export default {
  title: 'Bookownia/Organisms/Slider',
  component: Slider,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = () => <Slider />;

export const Normal = Template.bind({});
