import React from 'react';
import Text from './Text';

export default {
  title: 'Bookownia/Atoms/Text',
  component: Text,
};

const Template = (args) => <Text {...args}>{args.text}</Text>;

export const Normal = Template.bind({});
Normal.args = {
  text: 'zobacz więcej',
};
