import React from 'react';
import './Section.css';
import OrderCard from './OrderCard.jsx';

function Section() {
  return (
    <div className="order-section">
      <div className="order-section-title">
        <h1>protein or veggie</h1>
        <span>Choose up to two.</span>
      </div>
      <div className="order-cards">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default Section;
