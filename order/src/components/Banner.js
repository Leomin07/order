import React from 'react';

const Banner = () => {
  return (
    <div className="banner z-0">
      <img
        src={require('../assets/banner.jpg').default}
        alt="banner"
        className="img-fluid"
        width="100%"
      />
    </div>
  );
};

export default Banner;
