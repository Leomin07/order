import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryList } from '../actions/categoryAction.js';
import { productLists } from '../actions/productAction.js';
import Filter from '../components/Filter/Filter.js';
import Loading from '../components/Loading.js';
import MessageBox from '../components/MessageBox.js';
import Products from '../components/Products/ProductList.jsx';

const HomePage = () => {
  const state = useSelector(state => state.productList);
  const category = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const { products, loading, error } = state;
  useEffect(() => {
    dispatch(productLists());
    dispatch(categoryList());
  }, [dispatch]);
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
        <div className="products -ml-4">
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
