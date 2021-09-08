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
  FILTER_PRODUCT_BY_SIZE,
  FILTER_PRODUCT_BY_CATEGORY,
} from '../types/productType.js';
import axios from 'axios';

export const productLists = page => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:9000/products?_page=${page}&_limit=8`
      // `http://localhost:9000/products?q=${name}`
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
export const filterProductBySize = (products, size) => async dispatch => {
  dispatch({
    type: FILTER_PRODUCT_BY_SIZE,
    payload: {
      size: size,
      items:
        size === 'ALL'
          ? products
          : products.filter(x => x.availableSizes.indexOf(size) >= 0),
    },
  });
};
export const filterProductByBrand = (products, brand) => async dispatch => {
  dispatch({
    type: FILTER_PRODUCT_BY_CATEGORY,
    payload: {
      brand: brand,
      items:
        brand === 'ALL' ? products : products.filter(x => x.brand === brand),
    },
  });
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
