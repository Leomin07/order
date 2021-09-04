import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-company">
        <h4 className="footer-title">Công Ty</h4>
        <div className="footer-content">
          <div className="p">ĐỊA CHỈ: Cầu giấy, thành phố Hà Nội</div>
          <div className="p">SĐT LIÊN HỆ: 0975xxxxxxxx</div>
          <div className="p">EMAIL: minhtd@vmodev.com</div>
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
          <p>326 Cầu Giấy - Hà Nội</p>
          <p>110 Phố Nhổn - Hà Nội</p>
          <p>131 Cầu Giấy - Hà Nội</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;