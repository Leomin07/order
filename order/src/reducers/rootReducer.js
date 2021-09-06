import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
