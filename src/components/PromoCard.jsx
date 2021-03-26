import React from 'react';
import './PromoCard.css';

function PromoCard({ title, description, url }) {
  return (
    <div className="promo-card">
      <div className="promo-card-left">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>order now</span>
      </div>
      <div className="promo-card-right">
        <img src={url} alt="promo" />
      </div>
    </div>
  );
}

export default PromoCard;
