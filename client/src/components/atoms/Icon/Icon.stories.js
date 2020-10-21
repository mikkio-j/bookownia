import React from 'react';
import Icon from './Icon';

export default {
  title: 'Bookownia/Atoms/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Delivery = Template.bind({});
export const Sale = Template.bind({});
Sale.args = {
  sale: true,
};
export const Service = Template.bind({});
Service.args = {
  service: true,
};
export const Payments = Template.bind({});
Payments.args = {
  payments: true,
};
