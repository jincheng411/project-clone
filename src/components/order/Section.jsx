import React from 'react';
import './Section.css';
import OrderCard from './OrderCard.jsx';

function Section() {
  return (
    <div className="order-section">
      <h1>pretein or veggie</h1>
      <span>choose up to two</span>
      <div className="order-cards">
        <OrderCard />
      </div>
    </div>
  );
}

export default Section;
