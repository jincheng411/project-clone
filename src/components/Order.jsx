import React from 'react';
import './Order.css';
import menu from '../menu';
import Header from './order/Header.jsx';
import Section from './order/Section.jsx';
import AddToBag from './order/AddToBag.jsx';
import {products} from '../menu.js';

function Order() {
  const product = products[0];
  return (
    <>
      <div className="order">
        <Header product={product} />
        <Section section={product.sections[0]}/>
        <Section section={product.sections[0]}/>
        <Section section={product.sections[0]}/>
      </div>
      <AddToBag />
    </>
  );
}

export default Order;
