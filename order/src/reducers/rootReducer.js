import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productDetailReducer, productListReducer } from './productReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

export default rootReducer;
