import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILED,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILED,
  PRODUCT_BY_CATEGORY_ID_REQUEST,
  PRODUCT_BY_CATEGORY_ID_SUCCESS,
  PRODUCT_BY_CATEGORY_ID_FAILED,
  PRODUCT_BY_SIZE_REQUEST,
  PRODUCT_BY_SIZE_SUCCESS,
  PRODUCT_BY_SIZE_FAILED,
  PRODUCT_ACTIVE_REQUEST,
  PRODUCT_ACTIVE_SUCCESS,
  PRODUCT_ACTIVE_FAILED,
} from '../types/productType.js';
import axios from 'axios';

export const productLists = title => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_REQUEST,
  });
  try {
    const { data } = await axios.get(
      // `http://localhost:9000/products?_page=${page}&_limit=8`
      `http://localhost:9000/products`
    );
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILED,
      payload: err.message,
    });
  }
};

export const searchProduct = keyword => async dispatch => {
  dispatch({
    type: SEARCH_PRODUCT_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:9000/products?q=${keyword}`
    );
    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_PRODUCT_FAILED,
      payload: err.message,
    });
  }
};
export const productDetail = id => async dispatch => {
  dispatch({
    type: FETCH_PRODUCT_DETAIL_REQUEST,
  });
  try {
    const { data } = await axios.get(`http://localhost:9000/products/${id}`);
    dispatch({
      type: FETCH_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_DETAIL_FAILED,
      payload: err.message,
    });
  }
};
export const productByCategoryId = categoryId => async dispatch => {
  dispatch({
    type: PRODUCT_BY_SIZE_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:9000/category/${categoryId}/products`
    );
    dispatch({
      type: PRODUCT_BY_CATEGORY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_CATEGORY_ID_FAILED,
      payload: error.message,
    });
  }
};

export const productBySize = size => async dispatch => {
  dispatch({
    type: PRODUCT_BY_CATEGORY_ID_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:9000/products?size=${size}`
    );
    dispatch({
      type: PRODUCT_BY_SIZE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_SIZE_FAILED,
      payload: error.message,
    });
  }
};
export const productActive = () => async dispatch => {
  dispatch({
    type: PRODUCT_ACTIVE_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:9000/products?qty_gte=1`
    );
    dispatch({
      type: PRODUCT_ACTIVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ACTIVE_FAILED,
      payload: error.message,
    });
  }
};

export const addProduct = product => async dispatch => {
  const { data } = await axios.post(`http://localhost:9000/products`, product);
  dispatch({
    type: ADD_PRODUCT,
    payload: data,
  });
};
export const updateProduct = (id, product) => async dispatch => {
  const { data } = await axios.put(
    `http://localhost:9000/products/${id}`,
    product
  );
  dispatch({
    type: UPDATE_PRODUCT,
    payload: data,
  });
};

export const deleteProduct = id => async dispatch => {
  axios.delete(`http://localhost:9000/products/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};
