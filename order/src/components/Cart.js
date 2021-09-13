import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  completeAllCart,
  completeCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from '../actions/cartAction.js';

const Cart = ({ carts, cartComplete }) => {
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

  const completeCartHandler = id => {
    dispatch(completeCart(id));
  };

  const completeAllCartHandler = () => {
    dispatch(completeAllCart());
  };

  return (
    <div>
      <table className="table-auto text-center w-full mt-3 bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4">
              <input
                type="checkbox"
                checked={carts.every(cart => cart.complete)}
                onChange={() => completeAllCartHandler()}
              />
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
                <input
                  type="checkbox"
                  checked={cart.complete}
                  onChange={() => completeCartHandler(cart.id)}
                />
              </td>
              <td>
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="max-w-full h-48 m-auto"
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
                  value={cart.qty * cart.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₫'}
                />
              </td>
              <td className="cart-remove ">
                <AiOutlineDelete
                  size="2rem"
                  onClick={() => removeFromCartHandler(cart.id)}
                  className="mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-bottom">
        <div className="select-all-cart ">
          <input type="checkbox" className="mr-3" />
          <span>CHỌN TẤT CẢ ({carts.length}) </span>
        </div>
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
          <button className="bg-gray mx-4" onClick={() => history.push('/')}>
            TIẾP TỤC ĐẶT HÀNG
          </button>
          <button
            className="btn-submit mx-4"
            onClick={() => history.push('/checkout')}
          >
            MUA HÀNG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
