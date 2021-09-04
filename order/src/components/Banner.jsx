import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <img
        src={require('../assets/banner.jpg').default}
        alt="banner"
        className="img-fluid"
      />
    </div>
  );
};

export default Banner;
