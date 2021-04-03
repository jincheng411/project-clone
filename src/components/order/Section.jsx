import React from 'react';
import './Section.css';
import OrderCard from './OrderCard.jsx';

function Section({ section }) {
  const items = section.items;
  return (
    <div className="order-section">
      <div className="order-section-title">
        <h1>{section.name}</h1>
        {section.note && <span>{section.note}</span>}
      </div>
      <div className="order-cards">
        {items.map((item) =>
          <OrderCard item={item} key={item.name} />
        )}
      </div>
    </div>
  );
}

export default Section;
