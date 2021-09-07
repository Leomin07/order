import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from '../actions/productAction.js';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';
import ProductDetail from '../components/ProductDetail/ProductDetail.js';

const ProductDetailScreen = ({ match }) => {
  const detail = useSelector(state => state.productDetail);
  const dispatch = useDispatch();
  const id = match.params.id;
  const { product, loading, error } = detail;
  useEffect(() => {
    dispatch(productDetail(id));
  }, [dispatch, id]);
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox />
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
};

export default ProductDetailScreen;
