import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productDetailReducer, productListReducer } from './productReducer';
import { categoryListReducer } from '../reducers/categoryReducer.js';
import { loginReducer } from '../reducers/authReducer.js';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  categories: categoryListReducer,
  auth: loginReducer,
});

export default rootReducer;
