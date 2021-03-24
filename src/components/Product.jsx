import React from 'react';

function Product({ name, imgUrl }) {
  return (
    <div className="menu-product">
      <img src={process.env.PUBLIC_URL + imgUrl} alt='product' />
      <div className="menu-title">
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default Product;
