import React, {useState, useEffect} from 'react';
import './Order.css';
import menu from '../menu';
import Header from './order/Header.jsx';
import Section from './order/Section.jsx';
import AddToBag from './order/AddToBag.jsx';
import {products} from '../menu.js';
import axios from 'axios';

function Order({products}) {
  const product = products[0];
  const [sections, setSections] = useState([]);
  useEffect(() => {
    axios.get('/api/sections')
    .then((res) => {
      setSections(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [setSections])
  return (
    <>
      <div className="order">
        <Header product={product} />
        <Section section={sections[0]} category='protein' />
        <Section section={sections[1]} category='rice' />
        <Section section={sections[2]} category='beans' />
        <Section section={sections[3]} category='topping' />
        <Section section={sections[4]} category='options' />
        <Section section={sections[5]} category='side' />
        <Section section={sections[6]} category='drinks' />
      </div>
      <AddToBag />
    </>
  );
}

export default Order;
