import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
  productActive,
  productByCategoryId,
  productBySize,
  searchProduct,
} from '../../actions/productAction.js';
import './styles.css';

const Filter = ({ productLists, categories }) => {
  const [keyword, setKeyword] = useState();
  const [size, setSize] = useState([
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    '28',
    '29',
    '30',
    '31',
    '32',
  ]);
  const dispatch = useDispatch();
  const searchProductHandler = e => {
    e.preventDefault();
    dispatch(searchProduct(keyword));
  };

  const productByCategoryHandler = e => {
    let checked = e.target.checked;
    let id = e.target.value;
    if (checked) {
      setTimeout(() => {
        dispatch(productByCategoryId(id));
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(productLists());
      }, 1000);
    }
  };

  const productBySizeHandler = e => {
    let checked = e.target.checked;
    let size = e.target.value;
    console.log(checked, size);
    if (checked) {
      setTimeout(() => {
        dispatch(productBySize(size));
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(productLists());
      }, 1000);
    }
  };

  const productActiveHandler = e => {
    let checked = e.target.checked;
    if (checked) {
      setTimeout(() => {
        dispatch(productActive());
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(productLists());
      }, 1000);
    }
  };

  return (
    <div className="aside-main">
      <div className="search">
        <h3 className="search-content">TÌM KIẾM</h3>
        <form
          className="search-content"
          onSubmit={e => searchProductHandler(e)}
        >
          <input type="text" onChange={e => setKeyword(e.target.value)} />
          <button className="btn-submit">
            <AiOutlineSearch size="2rem" />
          </button>
        </form>
      </div>
      <div className="category">
        <h3 className="category-title">DANH MỤC</h3>
        <div className="category-list">
          {categories.map((value, key) => (
            <div className="category-item" key={key}>
              <input
                type="checkbox"
                value={value.id}
                onChange={e => productByCategoryHandler(e)}
              />
              {value.name}
            </div>
          ))}
        </div>
      </div>
      <div className="size">
        <h3 className="size-title">SIZE</h3>
        <div className="size-list">
          {size.map((value, key) => (
            <div className="size-item" key={key}>
              <input
                type="checkbox"
                value={value}
                onChange={e => productBySizeHandler(e)}
              />
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="row-status">
        <h3 className="status-title">TRẠNG THÁI</h3>
        <div className="status-list">
          <input type="checkbox" onChange={e => productActiveHandler(e)} />
          <span className="status-title">CÒN HÀNG</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
