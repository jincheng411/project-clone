import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './OrderCard.css';

function OrderCard() {
  return (
    <div className="order-card">
      <img src="https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6601-chicken/web-mobile/order.png" alt="section" />
      <div className="order-card-content">
        <h2>chicken</h2>
        <div className="cost-and-cal">
          <div className="cost">$9.25</div>
          <div className="cal">120 cal</div>
        </div>
      </div>
      <div className="more-option">
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default OrderCard;
