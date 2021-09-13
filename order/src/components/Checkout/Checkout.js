import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { GoDeviceMobile } from 'react-icons/go';
import { BsPersonLinesFill } from 'react-icons/bs';

const Checkout = ({ isShow, showForm, user }) => {
  return (
    <div>
      <div className="bg-white shadow p-4 rounded">
        <div className="flex align-center border-gray border-b pb-2">
          <h3 className="pt-1">ĐỊA CHỈ NHẬN HÀNG</h3>
        </div>
        <div className="flex align-center text-center py-4">
          <div className="mr-4 flex ">
            <BsPersonLinesFill size="1.5em" />
            {user.fullName}
          </div>
          <div className="mr-4 flex">
            <GoDeviceMobile size="1.5em" />
            {user.phone}
          </div>
          <div className="mr-4 flex">
            <ImLocation2 size="1.5em" />
            {user.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
