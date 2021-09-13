import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartList } from '../actions/cartAction.js';
import Cart from '../components/Cart.js';

const CartScreen = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  const cartComplete = carts.filter(cart => cart.complete === true);

  useEffect(() => {
    dispatch(cartList());
  }, [dispatch]);

  return (
    <div className="px-8 cart">
      {carts.length < 1 ? (
        <h3 className="cart-null text-center">
          Không có sản phẩm nào trong giỏ hàng của bạn
        </h3>
      ) : (
        <Cart carts={carts} cartComplete={cartComplete} />
      )}
    </div>
  );
};

export default CartScreen;
