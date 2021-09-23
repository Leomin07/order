import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-company">
        <h4 className="footer-title">Công Ty GENTSHOP</h4>
        <div className="footer-content">
          <div className="p">ĐỊA CHỈ: Cầu giấy, thành phố Hà Nội</div>
          <div className="p">SĐT LIÊN HỆ: 0868.303.399</div>
          <div className="p">EMAIL: minhtd@gmail.com</div>
        </div>
      </div>
      <div className="footer-customer">
        <h4 className="footer-title">Chính Sách Khách Hàng</h4>
        <div className="footer-content">
          <p>Hướng dẫn mua hàng</p>
          <p>Chính sách đổi hàng</p>
          <p>Chính sách xử lý khiếu nại </p>
        </div>
      </div>
      <div className="footer-store">
        <h4 className="footer-title">Hệ Thống Cửa Hàng</h4>
        <div className="footer-content">
          <ul>
            <li>326 Cầu Giấy - Hà Nội</li>
            <li>110 Phố Nhổn - Hà Nội</li>
            <li> 154 Quang Trung - Hà Đông - Hà Nội</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
