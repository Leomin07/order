import React from 'react';
import CartComplete from '../components/Checkout/CartComplete.js';
import Checkout from '../components/Checkout/Checkout.js';

const CheckoutScreen = () => {
  return (
    <div className="checkout container">
      <Checkout />
      <CartComplete />
    </div>
  );
};

export default CheckoutScreen;
