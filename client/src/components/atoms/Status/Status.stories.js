import React from 'react';
import Status from './Status';

export default {
  title: 'Bookownia/Atoms/Status',
  component: Status,
};

const Template = (args) => <Status {...args}>wysłane</Status>;

export const Green = Template.bind({});
Green.args = {
  green: true,
};
export const Yellow = Template.bind({});
Yellow.args = {
  yellow: true,
};
export const Red = Template.bind({});
Red.args = {
  red: true,
};
