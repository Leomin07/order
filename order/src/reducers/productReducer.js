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

export const productListReducer = (
  state = { products: [], loading: true },
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
      };
    case FETCH_PRODUCTS_FAILED:
      return { loading: false, error: action.payload };

    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case SEARCH_PRODUCT_FAILED:
      return { loading: false, error: action.payload };

    case PRODUCT_BY_CATEGORY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_BY_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCT_BY_CATEGORY_ID_FAILED:
      return { loading: false, error: action.payload };

    case PRODUCT_BY_SIZE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_BY_SIZE_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCT_BY_SIZE_FAILED:
      return { loading: false, error: action.payload };

    case PRODUCT_ACTIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_ACTIVE_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCT_ACTIVE_FAILED:
      return { loading: false, error: action.payload };

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
  state = { product: [], loading: true, error: null },
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
        error: action.payload,
      };
    default:
      return state;
  }
};
