import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productDetailReducer, productListReducer } from './productReducer';
import { categoryListReducer } from '../reducers/categoryReducer.js';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  categories: categoryListReducer,
});

export default rootReducer;
