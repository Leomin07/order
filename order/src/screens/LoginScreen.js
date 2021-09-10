import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/authAction.js';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const loginHandler = e => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };
  console.log();
  return (
    <div className="login container">
      <div className="login-title text-center">ĐĂNG NHẬP</div>
      <div className="login-form ">
        <form onSubmit={e => loginHandler(e)}>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="login-form-control">
            <button className="btn-login">ĐĂNG NHẬP</button>
            <div className="login-form-control_right">
              <span>
                Bạn chưa có tài khoản? <Link to="/register">ĐĂNG KÝ</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
