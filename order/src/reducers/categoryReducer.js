import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from '../types/categoryType.js';

export const categoryListReducer = (
  state = { categories: [], loading: false },
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
