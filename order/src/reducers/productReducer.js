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

export const productListReducer = (
  state = { products: [], loading: true, filterItems: [] },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filterItems: action.payload,
      };
    case FETCH_PRODUCTS_FAILED:
      return { loading: false, FAILED: action.payload };
    case FILTER_PRODUCT_BY_SIZE:
      return {
        ...state,
        products: action.payload.items,
      };
    case FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        products: action.payload.items,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(x => x.id !== action.payload),
      };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: [], loading: true },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case FETCH_PRODUCT_DETAIL_FAILED:
      return {
        loading: false,
        FAILED: action.payload,
      };
    default:
      return state;
  }
};
