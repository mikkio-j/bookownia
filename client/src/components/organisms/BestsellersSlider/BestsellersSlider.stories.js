import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BestsellersSlider from './BestsellersSlider';

export default {
  title: 'Bookownia/Organisms/BestsellersSlider',
  component: BestsellersSlider,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = () => <BestsellersSlider />;

export const Normal = Template.bind({});
