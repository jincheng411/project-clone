import React from 'react';
import './Header.css'
function Header({ product }) {
  return (
    <div className="order-header">
      <div className="header-left">
        <img src={product?.url} />
      </div>
      <div className="header-right">
        <h3>build your</h3>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}

export default Header;
