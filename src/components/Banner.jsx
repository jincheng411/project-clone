import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <video autoplay="autoplay" loop="loop" muted="muted" playsinline webkit-playsinline className="video-banner" src="https://www.chipotle.com/content/dam/poc/order/images/promo-banners/qd/v3-2300x520-Quesadilla-R7.mp4" />
      <div className="promo">
        <div className="promo-text-line1">
          <p>
            A whole new way to Chipotle paired with
            your favorite salsas and sides for pickup or delivery.
          </p>
        </div>
        <div className="promo-btn"><button>ORDER NOW</button></div>
        <div className="promo-text-line2">
          <p>Not available to order in-restaurant.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
