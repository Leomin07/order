import React from 'react';
import NumberFormat from 'react-number-format';

const CartComplete = ({ cartComplete }) => {
  return (
    <table className="table-auto text-center w-full mt-3 bg-white shadow rounded">
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
        {cartComplete.map((cart, key) => (
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
