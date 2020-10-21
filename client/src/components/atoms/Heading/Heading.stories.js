import React from 'react';
import Heading from './Heading';

export default {
  title: 'Bookownia/Atoms/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args}>{args.text}</Heading>;

export const Normal = Template.bind({});
Normal.args = {
  text: 'Bestsellery',
};
