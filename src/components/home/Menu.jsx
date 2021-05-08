import React from 'react';
import Product from './Product.jsx';
import './Menu.css';

function Menu({products}) {
  return (
    <div className="menu-list">
      <span id="menu"></span>
      {products.map((item) => <Product key={item._id} name={item.name} imgUrl={item.url} />)}
    </div>
  );
}

export default Menu;
