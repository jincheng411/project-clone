import React from 'react';

function Header({ product }) {
  return (
    <div className="header">
      <div className="header-left">
        <img src={product.url} />
      </div>
      <div className="header-right">
        <h3>build your</h3>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Header;
