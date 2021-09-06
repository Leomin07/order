import React from 'react';

const ProductList = ({ product }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`${product.image}`} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default ProductList;
