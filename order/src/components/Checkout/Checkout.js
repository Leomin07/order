import React from 'react';
import { ImLocation2 } from 'react-icons/im';

const Checkout = () => {
  return (
    <div className="checkout-address">
      <h3 className="checkout-info_title">
        <ImLocation2 size="2em" />
        ĐỊA CHỈ NHẬN HÀNG
      </h3>
      <div className="checkout-address-user">
        <div className="checkout-user__name">tranminh</div>
        <div className="checkout__mobile">09765</div>
      </div>
      <div className="checkout-address-inner">hoang quoc viet</div>
    </div>
  );
};

export default Checkout;
