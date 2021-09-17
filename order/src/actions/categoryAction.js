import axios from 'axios';
import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from '../types/categoryType.js';

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
