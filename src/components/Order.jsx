import React from 'react';
import './Order.css';
import menu from '../menu';
import Header from './order/Header.jsx';
import Section from './order/Section.jsx';
import AddToBag from './order/AddToBag.jsx';

function Order() {
  return (
    <>
      <div className="order">
        <Header product={menu[1]} />
        <Section />
        <Section />
        <Section />
      </div>
      <AddToBag />
    </>
  );
}

export default Order;
