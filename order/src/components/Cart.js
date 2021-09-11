import React from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import {
  cartList,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from '../actions/cartAction.js';
import { AiOutlineDelete } from 'react-icons/ai';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';
import { useHistory } from 'react-router';

const Cart = ({ carts }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const increaseQtyHandler = key => {
    dispatch(increaseQty(key));
  };

  const decreaseQtyHandler = key => {
    dispatch(decreaseQty(key));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Số tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, key) => (
            <tr key={cart.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="cart-img img-fluid"
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
                  <VscChromeMinimize
                    className="btn-decrease"
                    onClick={() => decreaseQtyHandler(key)}
                  />
                  <input type="text" min="1" value={cart.qty} />
                  <VscAdd
                    className="btn-increase"
                    onClick={() => increaseQtyHandler(key)}
                  />
                </div>
              </td>
              <td>
                <NumberFormat
                  cart={cart.qty * cart.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₫'}
                />
              </td>
              <td className="cart-remove">
                <AiOutlineDelete
                  size="2rem"
                  onClick={() => removeFromCartHandler(cart.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-control">
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
      </div>
    </div>
  );
};

export default Cart;
