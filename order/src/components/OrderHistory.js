import React from 'react';
import NumberFormat from 'react-number-format';

const OrderHistory = ({ order }) => {
  return (
    <table className="table-auto align-center text-center w-full mt-">
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
        {order.orderItems.map(item => (
          <tr key={item.id}>
            <td>
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full h-28 m-auto"
              />
            </td>
            <td>{item.name}</td>
            <td>
              <NumberFormat
                value={item.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₫'}
              />
            </td>
            <td>
              <div className="">{item.qty}</div>
            </td>
            <td>
              <NumberFormat
                value={item.qty * item.price}
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

export default OrderHistory;
