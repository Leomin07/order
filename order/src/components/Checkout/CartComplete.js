import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartList } from '../../actions/cartAction.js';
import NumberFormat from 'react-number-format';

const CartComplete = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  const cartComplete = carts.filter(cart => cart.complete === true);

  useEffect(() => {
    dispatch(cartList());
  }, [dispatch]);
  return (
    <table className="text-center px-10 py-5">
      <thead>
        <tr>
          <th>Ảnh sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Số tiền</th>
        </tr>
      </thead>
      <tbody>
        {carts.map((cart, key) => (
          <tr key={cart.id}>
            <td>
              <img
                src={cart.image}
                alt={cart.name}
                className="max-w-full h-28 m-auto"
              />
            </td>
            <td className="cart-name">{cart.name}</td>
            <td className="cart-price">
              <NumberFormat
                value={cart.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₫'}
              />
            </td>
            <td>
              <div className="cart-qty">
                <input type="text" min="1" value={cart.qty} />
              </div>
            </td>
            <td>
              <NumberFormat
                value={cart.qty * cart.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₫'}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartComplete;
