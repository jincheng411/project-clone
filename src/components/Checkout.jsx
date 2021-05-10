import React from 'react';
import './Checkout.css';

function Checkout({isVisible, toggleCheckout}) {
  const handleOnClick = () => {
    toggleCheckout()
  }
  return (
    <div className={`checkout ${isVisible && "checkout-visible"}`} onClick={handleOnClick}>
      <div className="checkout-content">
      <div className="mid-section">
        <img src="/image/pepper-small.svg" alt="pepper" />
        <span className="separator" />
        <div className="mid-section-text">
          <p>pickup from</p>
          <small>185 7th Ave</small>
        </div>
      </div>
        <span onClick={handleOnClick} className="checkout-close">&times;</span>
        <h1>checkout</h1>
      </div>
    </div>
  );
}

export default Checkout;