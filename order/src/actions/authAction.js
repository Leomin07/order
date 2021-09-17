import axios from 'axios';
import {
  LOAD_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../types/authType.js';

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
      localStorage.setItem('isAdmin', resp.data.user.isAdmin);
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
export const loadUserAction = () => (dispatch, getState) => {
  const token = getState().auth.token;
  if (token) {
    dispatch({
      type: LOAD_USER,
    });
  } else return null;
};
