import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

export default {
  title: 'Bookownia/Atoms/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Footer {...args} />;

export const Normal = Template.bind({});
