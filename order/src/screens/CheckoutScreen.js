import React, { useState } from 'react';
import CartComplete from '../components/Checkout/CartComplete.js';
import Checkout from '../components/Checkout/Checkout.js';

const CheckoutScreen = () => {
  const [isShow, setIsShow] = useState(false);
  const showForm = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="checkout container">
      <Checkout isShow={isShow} showForm={showForm} />
      <CartComplete />
    </div>
  );
};

export default CheckoutScreen;
