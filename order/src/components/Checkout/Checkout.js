import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { GoDeviceMobile } from 'react-icons/go';
import { BsPersonLinesFill } from 'react-icons/bs';

const Checkout = ({ isShow, showForm }) => {
  return (
    <div>
      <div className="bg-white shadow p-4 rounded">
        <div className="flex align-center border-gray border-b pb-2">
          <h3 className="pt-1">ĐỊA CHỈ NHẬN HÀNG</h3>
        </div>
        <div className="flex align-center text-center">
          <div className="mr-4 flex">
            <BsPersonLinesFill size="1.5em" />
            tranminh
          </div>
          <div className="flex">
            <GoDeviceMobile size="1.5em" />
            09765
          </div>
          <div className="flex">
            <ImLocation2 size="1.5em" />
            hoang quoc viet
          </div>
          <span
            className="text-blue cursor-pointer hover:text-blue-100"
            onClick={() => showForm()}
          >
            CHỈNH SỬA
          </span>
        </div>
      </div>
      {isShow && (
        <div className="bg-white shadow p-4 rounded mt-3">
          <form className="flex">
            <div className="">
              <h4>CHỈNH SỬA THÔNG TIN</h4>
            </div>
            <div>
              <input
                type="text"
                className="border border-gray"
                placeholder="Họ Tên"
              />
            </div>
            <div>
              <input
                type="text"
                className="border border-gray"
                placeholder="Số Điện Thoại"
              />
            </div>
            <div>
              <input
                type="text"
                className="border border-gray"
                placeholder="Địa Chỉ"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
