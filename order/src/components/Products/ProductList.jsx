import React from 'react';
import './styles.css';

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`${product.image}`} alt="" className="img-fluid" />
      </div>
      <div className="card-info">
        <h3 className="card-name text-center">{product.name} </h3>
        <div className="card-price text-center">
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
