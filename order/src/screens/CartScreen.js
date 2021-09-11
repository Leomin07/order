import React, { useEffect } from 'react';
import { cartList } from '../actions/cartAction.js';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import Cart from '../components/Cart.js';

const CartScreen = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const carts = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(cartList());
  }, [dispatch]);

  return (
    <div className="cart">
      {carts.length < 1 ? (
        <h3 className="cart-null text-center">
          Không có sản phẩm nào trong giỏ hàng của bạn
        </h3>
      ) : (
        <Cart carts={carts} />
      )}
      {/* <div className="cart-control">
        {carts.length < 1 ? (
          ''
        ) : (
          <div className="cart-total-price">
            <span>
              Tổng tiền: {''}
              <NumberFormat
                value={carts.reduce((a, c) => a + c.qty * c.price, 0)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₫'}
              />
            </span>
          </div>
        )}
        {carts.length < 1 ? (
          ''
        ) : (
          <div className="cart-actions">
            <button className="btn-home" onClick={() => history.push('/')}>
              TIẾP TỤC MUA HÀNG
            </button>
            <button
              className="btn-order"
              onClick={() => history.push('/checkout')}
            >
              THANH TOÁN
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CartScreen;
