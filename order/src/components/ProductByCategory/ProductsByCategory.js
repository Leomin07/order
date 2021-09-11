import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productByCategoryId } from '../../actions/productAction.js';
import './styles.css';

const ProductsByCategory = ({ categoryId }) => {
  const state = useSelector(state => state.productList);
  const { products } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productByCategoryId(categoryId));
  }, [dispatch, categoryId]);
  return (
    <div className="product-by-category">
      <h3 className="product-by-category_title text-center">
        SẢN PHẨM CÙNG DANH MỤC
      </h3>
      <div className="product-by-category-list">
        {products.map((product, key) => (
          <div className="card" key={key}>
            <div className="card-img">
              <Link to={`${product.id}`}>
                <img src={`${product.image}`} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="card-name text-center">
              <Link to={`${product.id}`}>
                <span>{product.name} </span>
              </Link>
            </div>
            <div className="card-price text-center">
              <span>
                <NumberFormat
                  value={product.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₫'}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
