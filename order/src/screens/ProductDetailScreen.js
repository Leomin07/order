import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from '../actions/productAction.js';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';
import ProductsByCategory from '../components/ProductByCategory/ProductsByCategory.js';
import ProductDetail from '../components/ProductDetail/ProductDetail.js';

const ProductDetailScreen = ({ match }) => {
  const detail = useSelector(state => state.productDetail);
  const dispatch = useDispatch();
  const id = match.params.id;
  const { product, loading, error } = detail;
  useEffect(() => {
    setTimeout(() => {
      dispatch(productDetail(id));
    }, 2000);
  }, [dispatch, id]);
  return (
    <div className="">
      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox error={error} />
        ) : (
          <ProductDetail product={product} />
        )}
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox error={error} />
        ) : (
          <ProductsByCategory categoryId={product.categoryId} productId={id} />
        )}
      </div>
    </div>
  );
};

export default ProductDetailScreen;
