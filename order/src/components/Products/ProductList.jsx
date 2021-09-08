import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import './styles.css';

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <Link to={`product/${product.id}`}>
          <img src={`${product.image}`} alt="" className="img-fluid" />
        </Link>
      </div>
      <div className="card-name text-center">
        <Link to={`product/${product.id}`}>
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
  );
};

export default ProductList;
