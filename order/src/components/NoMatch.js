import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src={require('../assets/404.png').default}
        alt=""
        className="img-fluid"
      />
    </div>
  );
};

export default NotFound;
