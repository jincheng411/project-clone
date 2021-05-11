import React from 'react';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import './Checkout.css';

function Checkout({ isVisible, toggleCheckout }) {
  const handleOnClick = () => {
    toggleCheckout();
  }
  var bg = document.getElementById("bg");
  window.onclick = function (event) {
    if (event.target === bg) {
      toggleCheckout();
    }
  }
  return (
    <div className={`checkout ${isVisible && "checkout-visible"}`} id="bg">
      <div className="checkout-content">
        <div className="checkout-title">
          <div className="checkout-and-close">
            <div className="mid-section">
              <img src="/image/pepper-small.svg" alt="pepper" />
              <span className="separator" />
              <div className="mid-section-text">
                <p>pickup from</p>
                <small>185 7th Ave</small>
              </div>
            </div>
            <span onClick={handleOnClick} className="checkout-close">&times;</span>
          </div>
          <div className="checkout-group-order"><GroupAddIcon className="checkout-group-icon" /><h3>MAKE IT A GROUP ORDER</h3></div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;