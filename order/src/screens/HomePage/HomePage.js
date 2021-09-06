import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter.js';
import { productLists } from '../../actions/productAction.js';
import Products from '../../components/Products/ProductList.jsx';
import './styles.css';

const HomePage = () => {
  const state = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const { products, loading, error } = state;
  useEffect(() => {
    dispatch(productLists(''));
  }, [dispatch]);
  console.log(products);
  return (
    <div className="container home">
      <aside>
        <Filter />
      </aside>
      <main>
        <div className="products">
          {loading ? (
            <span>Loading</span>
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
