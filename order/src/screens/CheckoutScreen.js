import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cartList, removeMultiItem } from '../actions/cartAction.js';
import { createOrder } from '../actions/orderAction.js';
import CartComplete from '../components/Checkout/CartComplete.js';
import Checkout from '../components/Checkout/Checkout.js';

const CheckoutScreen = () => {
  const history = useHistory();
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  const cartComplete = carts.filter(cart => cart.complete === true);

  useEffect(() => {
    dispatch(cartList());
  }, [dispatch]);

  const checkoutHandler = () => {
    let orderData = {
      userId: user.id,
      fullName: user.fullName,
      phone: user.phone,
      address: user.address,
      createAt: new Date(Date.now()).toLocaleString(),
      orderItems: cartComplete,
    };
    dispatch(createOrder(orderData));
    dispatch(removeMultiItem());
    history.push('/order-history');
    console.log(orderData);
  };

  return (
    <div className="px-8 my-4">
      <Checkout user={user} />
      <CartComplete cartComplete={cartComplete} />
      <div className="cart-bottom">
        <h4 className="total-price">
          TỔNG THANH TOÁN ({cartComplete.length} SẢN PHẨM):{' '}
          <NumberFormat
            value={cartComplete.reduce((a, c) => a + c.qty * c.price, 0)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₫'}
          />
        </h4>
        <div className="cart-actions ">
          <button className="btn-submit mx-4" onClick={() => checkoutHandler()}>
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
