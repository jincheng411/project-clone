import React from 'react';
import './PromoBar.css';

function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-bar-content">
        <img src="/image/pepper-medallion.svg" alt="pepper" />
        <h2>Join chipotle rewards. Unwrap some free chipotle.</h2>
        <div className="promo-bar-account">
          <div className="button"><span>create an account</span></div>
          <h5>or</h5>
          <h4>sign in</h4>
        </div>
      </div>
    </div>
  );
}

export default PromoBar;
