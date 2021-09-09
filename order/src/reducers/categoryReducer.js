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

export const categoryListReducer = (
  state = { categories: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case FETCH_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
