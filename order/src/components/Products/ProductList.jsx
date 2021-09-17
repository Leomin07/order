import React from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToCart } from '../../actions/cartAction';
import './styles.css';

const ProductList = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const addToCartHandler = product => {
    let newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
      size: product.size,
      complete: false,
    };
    dispatch(addToCart(newProduct));
    history.push('/cart');
  };
  return (
    <div className="card relative z-0">
      <div className="card-img">
        <Link to={`product/${product.id}`}>
          <img src={`${product.image}`} alt="" className="img-fluid" />
        </Link>
      </div>
      <div className="card-name text-center ">
        <Link to={`product/${product.id}`}>
          <span className="hover:text-blue">{product.name} </span>
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
      <div
        className={product.qty < 1 ? 'card-actions invisible' : 'card-actions'}
      >
        <button
          className="btn-add-to-cart"
          onClick={() => addToCartHandler(product)}
        >
          ĐẶT HÀNG
        </button>
      </div>
    </div>
  );
};

export default ProductList;
