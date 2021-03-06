import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

export default {
  title: 'Bookownia/Organisms/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  layout: 'fullscreen',
};

const Template = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
