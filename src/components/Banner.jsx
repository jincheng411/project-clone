import React from 'react';

function Banner() {
  return (
    <div className="banner">
      <div className="video-banner">
        <video src="https://www.chipotle.com/content/dam/poc/order/images/promo-banners/qd/v3-2300x520-Quesadilla-R7.mp4" />
      </div>
      <div className="promo">
        <div className="promo-text-line1">
          <span>new</span>
          <p>hand-crafted</p>
        </div>
        <div className="promo-text-line2">
          <p>quesadilla</p>
        </div>
        <div className="promo-text-line3">
          <p>-only available online</p>
        </div>
        <div className="promo-text-line4">
          <p>
            A whole new way to Chipotle paired with
            your favorite salsas and sides for pickup or delivery.
          </p>
        </div>
        <div className="promo-btn"><button>ORDER NOW</button></div>
        <div className="promo-text-line5">
          <p>Not available to order in-restaurant.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
