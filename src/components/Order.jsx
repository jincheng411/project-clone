import React, {useState, useEffect} from 'react';
import './Order.css';
import menu from '../menu';
import Header from './order/Header.jsx';
import Section from './order/Section.jsx';
import AddToBag from './order/AddToBag.jsx';
import {products} from '../menu.js';

function Order({products}) {
  const product = products[0];
  const [sections, setSections] = useState([]);
  return (
    <>
      <div className="order">
        <Header product={product} />
        {/* <Section section={product.sections[0]} category='protein' />
        <Section section={product.sections[1]} category='rice' />
        <Section section={product.sections[2]} category='beans' />
        <Section section={product.sections[3]} category='topping' />
        <Section section={product.sections[4]} category='options' />
        <Section section={product.sections[5]} category='side' />
        <Section section={product.sections[6]} category='drinks' /> */}
      </div>
      <AddToBag />
    </>
  );
}

export default Order;
