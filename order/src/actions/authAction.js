import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
} from '../types/authType.js';
import axios from 'axios';

export const loginAction = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  axios
    .post('http://localhost:9000/login', {
      email,
      password,
    })
    .then(resp => {
      localStorage.setItem('token', resp.data.accessToken);
      console.log(resp);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp.data,
      });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAILED,
        payload: error.message,
      });
    });
};

export const registerAction =
  (email, password, fullName, phone, address, isAdmin) => dispatch => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    axios
      .post('http://localhost:9000/register', {
        email,
        password,
        fullName,
        phone,
        address,
        isAdmin,
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.accessToken);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: resp.data,
        });
      })
      .catch(error => {
        dispatch({
          type: REGISTER_FAILED,
          payload: error.message,
        });
      });
  };

export const logoutAction = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};
