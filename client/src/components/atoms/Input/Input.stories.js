import React from 'react';
import Input from './Input';

export default {
  title: 'Bookownia/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
export const Search = Template.bind({});
Search.args = {
  search: true,
};
