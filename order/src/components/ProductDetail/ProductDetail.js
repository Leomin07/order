import React from 'react';
import NumberFormat from 'react-number-format';
import './styles.css';
import { TiTick } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../actions/cartAction';

const ProductDetail = ({ product }) => {
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
    };
    dispatch(addToCart(newProduct));
    history.push('/cart');
  };
  return (
    <div className="product-detail">
      <div className="product-detail-img">
        <img
          src={`${product.image}`}
          alt={product.name}
          className="img-fluid"
        />
      </div>
      <div className="product-detail-info">
        <h3 className="product-detail-title">{product.name}</h3>
        <div className="product-detail-price">
          <span>
            <NumberFormat
              value={product.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₫'}
            />
          </span>
        </div>
        <div className="product-detail-size relative">
          <p>Size:</p>
          <button className="bg-none outline-none border">
            {product.size}
          </button>
          <TiTick className="tick-size absolute top-10 bg-red text-white" />
        </div>
        <div
          className={
            product.qty < 1
              ? 'product-detail-qty sold-out'
              : 'product-detail-qty'
          }
        >
          <button disabled>
            {product.qty < 1 ? <span>Hết hàng.</span> : ''}
          </button>
        </div>
        <div className="product-detail-description">
          <p>Mô tả sản phẩm:</p>
          <p>{product.description}</p>
        </div>
        <div className="product-detail-action">
          {product.qty < 1 ? (
            ''
          ) : (
            <button
              className="btn-add-to-cart"
              onClick={() => addToCartHandler(product)}
            >
              ĐẶT HÀNG
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
