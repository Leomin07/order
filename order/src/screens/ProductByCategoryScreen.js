import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productByCategoryId } from '../actions/productAction.js';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';
import ProductList from '../components/Products/ProductList.jsx';

const ProductByCategoryScreen = ({ match }) => {
  const state = useSelector(state => state.productList);
  const { products, loading, error } = state;
  const dispatch = useDispatch();
  const id = match.params.id;
  useEffect(() => {
    dispatch(productByCategoryId(id));
  }, [dispatch, id]);
  return (
    <div className="products">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox />
      ) : (
        products.map((value, index) => (
          <ProductList key={index} product={value} />
        ))
      )}
    </div>
  );
};

export default ProductByCategoryScreen;
