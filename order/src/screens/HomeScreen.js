import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryList } from '../actions/categoryAction.js';
import { productLists, productNew } from '../actions/productAction.js';
import Filter from '../components/Filter/Filter.js';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';
import Products from '../components/Products/ProductList.jsx';

const HomePage = () => {
  const [page, setPage] = useState(2);
  const state = useSelector(state => state.productList);
  const category = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const { products, loading, error } = state;

  useEffect(() => {
    dispatch(productLists());
    dispatch(categoryList());
  }, [dispatch]);

  const pagination = () => {
    setPage(page => page + 1);
    dispatch(productNew(page));
  };

  return (
    <div className="home px-8 flex">
      <aside className="w-1/4">
        {category.loading ? (
          ''
        ) : category.error ? (
          ''
        ) : (
          <Filter
            categories={category.categories}
            productLists={productLists}
          />
        )}
      </aside>
      <main className="w-3/4">
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
        <div>
          {products ? (
            <span
              className="text-blue-100 cursor-pointer mx-auto"
              onClick={() => pagination()}
            >
              LOAD MORE
            </span>
          ) : (
            ''
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
