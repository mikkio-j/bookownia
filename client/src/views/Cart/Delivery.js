import React from 'react';
import CartTemplate from '../../templates/CartTemplate';
import LoginForm from '../../components/molecules/LoginForm/LoginForm';

const CartView = () => (
  <>
    <CartTemplate>
      <LoginForm />
    </CartTemplate>
  </>
);

export default CartView;
