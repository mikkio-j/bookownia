import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './Logo';

export default {
  title: 'Bookownia/Atoms/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Logo {...args} />;

export const Normal = Template.bind({});
