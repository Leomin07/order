import React, { useEffect, useState } from 'react';
import OrderHistory from '../components/OrderHistory';
import { orderListAction } from '../actions/orderAction.js';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { FcOvertime } from 'react-icons/fc';
import { BsPersonLinesFill } from 'react-icons/bs';

const OrderHistoryScreen = () => {
  const dispatch = useDispatch();
  const orderLists = useSelector(state => state.orderList.order);
  const [isShow, setIsShow] = useState(false);
  const showOrderDetail = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    dispatch(orderListAction());
  }, [dispatch]);

  return (
    <div className="px-8 my-4">
      <h3 className="text-center text-3xl">LỊCH SỬ ĐẶT HÀNG</h3>
      <div className="bg-white">
        {orderLists.map(order => (
          <div className="flex flex-col shadow rounded text-xl my-4 ">
            <div className="flex align-center text-center px-8 py-4 border-b">
              <div className="flex">
                <BsPersonLinesFill size="1.5em" />
                {order.fullName}
              </div>
              <div className="flex ml-2 align-center">
                <FcOvertime size="1.5em" /> {order.createAt}
              </div>
              <div className="ml-2 text-red">
                TỔNG THANH TOÁN: {''}
                <NumberFormat
                  value={order.orderItems.reduce(
                    (a, c) => a + c.qty * c.price,
                    0
                  )}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₫'}
                />
              </div>
              <button
                className="text-blue border-b ml-2 hover:text-blue-100 outline-none"
                onClick={showOrderDetail}
              >
                XEM CHI TIẾT
              </button>
            </div>
            <div>{isShow && <OrderHistory order={order} />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryScreen;
