import {
  ADD_TO_CART,
  CART_LIST,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
} from '../types/cartType.js';

export const cartList = () => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  dispatch({
    type: CART_LIST,
    payload: { cartItems },
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
