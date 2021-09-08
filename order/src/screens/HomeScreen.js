import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productLists, paginationProduct } from '../actions/productAction.js';
import Filter from '../components/Filter.js';
import Products from '../components/Products/ProductList.jsx';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const state = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const { products, loading, error } = state;
  useEffect(() => {
    dispatch(productLists());
    // setTimeout(() => {
    // }, 1000);
  }, [dispatch]);
  console.log(products);
  const pagination = () => {
    dispatch(paginationProduct(page));
  };

  return (
    <div className="home container">
      {/* <aside>{loading ? '' : error ? '' : <Filter />}</aside>
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
          <button onClick={() => setPage(page + 1)}>Load more</button>
        </div>
      </main> */}
    </div>
  );
};

export default HomePage;
