import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { registerAction } from '../actions/authAction.js';

const RegisterScreen = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
  });
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(registerAction(email, password, name, phone, address, false));
    history.push('/');
  };

  return (
    <div className="login">
      <div className="login-title text-center">ĐĂNG KÝ</div>
      <div className="login-form ">
        <form onSubmit={handleSubmit(loginHandler)}>
          <div className="form-group">
            <input
              {...register('name', {
                required: true,
                minLength: 6,
              })}
              className="form-control"
              type="text"
              placeholder="Họ Tên"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {errors?.name?.type === 'required' && (
              <p className="text-red">Không được để trống</p>
            )}
            {errors?.name?.type === 'minLength' && (
              <p className="text-red">Tối thiểu 6 ký tự</p>
            )}
          </div>
          <div className="form-group">
            <input
              {...register('email', {
                required: true,
                minLength: 9,
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
              <p className="text-red">Tối thiểu 9 ký tự</p>
            )}
          </div>
          <div className="form-group">
            <input
              {...register('phone', {
                required: true,
                minLength: 10,
              })}
              className="form-control"
              type="number"
              placeholder="Số Điện Thoại"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            {errors?.phone?.type === 'required' && (
              <p className="text-red">Không được để trống</p>
            )}
            {errors?.phone?.type === 'minLength' && (
              <p className="text-red">Tối thiểu 10 số</p>
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
          <div className="form-group">
            <textarea
              {...register('address', {
                required: true,
                minLength: 10,
              })}
              cols="30"
              rows="5"
              className="form-control"
              placeholder="Địa chỉ"
              value={address}
              onChange={e => setAddress(e.target.value)}
            ></textarea>
            {errors?.address?.type === 'required' && (
              <p className="text-red">Không được để trống</p>
            )}
            {errors?.address?.type === 'minLength' && (
              <p className="text-red">Tối thiểu 10 ký tự</p>
            )}
          </div>
          <div className="login-form-control">
            <button className="btn-submit" type="submit">
              ĐĂNG KÝ
            </button>
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
