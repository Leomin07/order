import {
  ADD_TO_CART,
  CART_LIST,
  COMPLETE_ALL_CART,
  COMPLETE_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_FROM_CART,
  REMOVE_MULTI_ITEM,
} from '../types/cartType.js';

export const cartList = () => (dispatch, getState) => {
  const cartItems = localStorage.getItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
  dispatch({
    type: CART_LIST,
    payload: cartItems,
  });
};

export const addToCart = product => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const increaseQty = payload => (dispatch, getState) => {
  dispatch({
    type: INCREASE_QTY,
    payload,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const decreaseQty = payload => (dispatch, getState) => {
  dispatch({
    type: DECREASE_QTY,
    payload,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = id => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const completeCart = id => (dispatch, getState) => {
  dispatch({
    type: COMPLETE_CART,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const completeAllCart = () => (dispatch, getState) => {
  dispatch({
    type: COMPLETE_ALL_CART,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeMultiItem = () => (dispatch, getState) => {
  dispatch({
    type: REMOVE_MULTI_ITEM,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
