import React, { useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartList,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from '../actions/cartAction.js';
import { useHistory } from 'react-router-dom';

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const carts = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(cartList());
  }, [dispatch]);

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
    <div className="cart">
      {carts.length < 1 ? (
        <h3 className="cart-null text-center">
          Không có sản phẩm nào trong giỏ hàng của bạn
        </h3>
      ) : (
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
            {carts.map((value, key) => (
              <tr key={value.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    src={value.image}
                    alt={value.name}
                    className="cart-img img-fluid"
                  />
                </td>
                <td className="cart-name">{value.name}</td>
                <td className="cart-price">
                  <NumberFormat
                    value={value.price}
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
                    <input type="text" min="1" value={value.qty} />
                    <VscAdd
                      className="btn-increase"
                      onClick={() => increaseQtyHandler(key)}
                    />
                  </div>
                </td>
                <td>
                  <NumberFormat
                    value={value.qty * value.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₫'}
                  />
                </td>
                <td className="cart-remove">
                  <AiOutlineDelete
                    size="2rem"
                    onClick={() => removeFromCartHandler(value.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
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
      <div className="cart-control">
        <button className="cart-control-home" onClick={() => history.push('/')}>
          TIẾP TỤC MUA HÀNG
        </button>
        <button
          className="cart-control-order"
          onClick={() => history.push('/checkout')}
        >
          THANH TOÁN
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
