import {
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  ORDER_DETAIL_FAILED,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_LIST_FAILED,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from '../types/orderType.js';

export const orderListReducer = (
  state = { order: [], loading: false },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };

    case ORDER_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: [...state.order, action.payload],
      };

    case CREATE_ORDER_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { orderDetail: [], loading: false },
  action
) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetail: action.payload,
      };

    case ORDER_DETAIL_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
