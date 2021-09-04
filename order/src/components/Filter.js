import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <div className="aside-main">
      <div className="icon-search">
        {/* <Link to="/" className="icon-link">
          <BsSearch size="2rem" />
        </Link> */}
        <input type="text" />
      </div>
    </div>
  );
};

export default Filter;
