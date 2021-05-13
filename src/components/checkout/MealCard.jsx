import React from 'react';
import './MealCard.css';

function MealCard() {
  return (
    <div className="mealcard">
      <div className="mealcard-customer">
        <input type="text" value="Jin" />
        <h5>$10.30</h5>
      </div>
      <div className="mealcard-product">
        <h5>Steak Burrito</h5>
        <h5>$10.30</h5>
      </div>
      <div className="mealcard-product-detail">
        <p>Steak (½), Chicken (½), Brown Rice, Tomatillo-Green Chili Salsa, Fresh Tomato Salsa, Pinto Beans (½), and Black Beans (½)</p>
      </div>
      <div className="mealcard-product-ops">
        <span>REMOVE</span>
        <span>EDIT</span>
        <span>DUPLICATE</span>
      </div>
      <div className="mealcard-product-underline"></div>
    </div>
  )
}

export default MealCard;