import React from 'react';
import './Order.css';
import menu from '../menu';
import Header from './order/Header.jsx';

function Order() {
  return (
    <div className="order">
      <Header product={menu[1]} />
    </div>
  );
}

export default Order;
