import {
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_FAILED,
  //   FETCH_CATEGORY_DETAIL_REQUEST,
  //   FETCH_CATEGORY_DETAIL_SUCCESS,
  //   FETCH_CATEGORY_DETAIL_FAILED,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from '../types/categoryType.js';
import axios from 'axios';

export const categoryList = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORY_REQUEST,
  });
  try {
    const { data } = await axios.get('http://localhost:9000/category');
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORY_FAILED,
      payload: error.message,
    });
  }
};
