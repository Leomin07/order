import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/authReducer.js';
import { categoryListReducer } from '../reducers/categoryReducer.js';
import {
  orderDetailReducer,
  orderListReducer,
} from '../reducers/orderReducer.js';
import { cartReducer } from './cartReducer';
import { productDetailReducer, productListReducer } from './productReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  categories: categoryListReducer,
  auth: loginReducer,
  orderList: orderListReducer,
  orderDetail: orderDetailReducer,
});

export default rootReducer;
