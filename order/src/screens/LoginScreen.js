import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginAction } from '../actions/authAction.js';
import { useForm } from 'react-hook-form';

const LoginScreen = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(loginAction(email, password));
    history.push('/');
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
  });
  return (
    <div className="login">
      <div className="login-title text-center">ĐĂNG NHẬP</div>
      <div className="login-form ">
        <form onSubmit={handleSubmit(loginHandler)}>
          <div className="form-group">
            <input
              {...register('email', {
                required: true,
                minLength: 6,
              })}
              className="form-control"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errors?.email?.type === 'required' && (
              <p className="text-red">Không được để trống</p>
            )}
            {errors?.email?.type === 'minLength' && (
              <p className="text-red">Tối thiểu 6 ký tự</p>
            )}
          </div>
          <div className="form-group">
            <input
              {...register('password', {
                required: true,
                minLength: 6,
              })}
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errors?.password?.type === 'required' && (
              <p className="text-red">Không được để trống</p>
            )}
            {errors?.password?.type === 'minLength' && (
              <p className="text-red">Tối thiểu 6 ký tự</p>
            )}
          </div>
          <div className="login-form-control">
            <button className="btn-submit" type="submit">
              ĐĂNG NHẬP
            </button>
            <div className="login-form-control_right">
              <span>
                Bạn chưa có tài khoản?{' '}
                <Link to="/register" className="link">
                  ĐĂNG KÝ
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
