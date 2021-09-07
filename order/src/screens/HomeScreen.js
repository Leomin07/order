import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productLists } from '../actions/productAction.js';
import Filter from '../components/Filter.js';
import Products from '../components/Products/ProductList.jsx';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';

const HomePage = () => {
  const state = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const { products, loading, error } = state;
  useEffect(() => {
    dispatch(productLists(''));
  }, [dispatch]);
  return (
    <div className="container home">
      <aside>
        <Filter />
      </aside>
      <main>
        <div className="products">
          {loading ? (
            <Loading />
          ) : error ? (
            <MessageBox />
          ) : (
            products.map((value, index) => (
              <Products key={index} product={value} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
