import React from 'react';
import ArrowIcon from './ArrowIcon';

export default {
  title: 'Bookownia/Atoms/ArrowIcon',
  component: ArrowIcon,
};

const Template = (args) => <ArrowIcon {...args} />;

export const Left = Template.bind({});
Left.args = {
  left: true,
};

export const Right = Template.bind({});
Right.args = {
  right: true,
};
