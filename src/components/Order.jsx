import React from 'react';
import menu from './menu';
import Product from './Product.jsx';
import './Order.css';

function Order() {
  return (
    <div className="menu-list">
      {menu.map((item) => <Product key={item.name} name={item.name} imgUrl={item.url} />)}
    </div>
  );
}

export default Order;
