import React from 'react';
import './AddToBag.css';

function AddToBag() {
  return (
    <div className="add-to-bag">
      <div className="meal-summary">
        <h3>YOUR MEAL</h3>
        <p>6 Sides, 6 Drinks</p>
      </div>
      <div className="add-to-bag-btn">
        <h2>ADD TO BAG</h2>
      </div>
    </div>
  );
}

export default AddToBag;
