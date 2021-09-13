import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../actions/authAction.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const RegisterScreen = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();
  const loginHandler = e => {
    e.preventDefault();
    dispatch(registerAction(email, password, name, phone, address, false));
    history.push('/');
  };

  return (
    <div className="login">
      <div className="login-title text-center">ĐĂNG KÝ</div>
      <div className="login-form ">
        <form onSubmit={e => loginHandler(e)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Họ Tên"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Số Điện Thoại"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="30"
              rows="5"
              className="form-control"
              placeholder="Địa chỉ"
              value={address}
              onChange={e => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="login-form-control">
            <button className="btn-submit">ĐĂNG KÝ</button>
            <div className="login-form-control_right">
              <span>
                Bạn chưa đã có tài khoản?{' '}
                <Link to="/login" className="link">
                  ĐĂNG NHẬP
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
