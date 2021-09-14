import {
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_FAILED,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from '../types/orderType.js';
import axios from 'axios';

export const orderListAction = () => async dispatch => {
  dispatch({
    type: ORDER_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(`http://localhost:9000/order`);
    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ORDER_LIST_FAILED,
      payload: err.message,
    });
  }
};

export const orderDetail = id => async dispatch => {
  dispatch({
    type: ORDER_DETAIL_REQUEST,
  });
  try {
    const { data } = await axios.get(`http://localhost:9000/order/${id}`);
    dispatch({
      type: ORDER_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ORDER_DETAIL_FAILED,
      payload: err.message,
    });
  }
};

export const createOrder = order => async dispatch => {
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });
  try {
    const { data } = await axios.post(`http://localhost:9000/order`, order);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAILED,
      payload: error.message,
    });
  }
};
