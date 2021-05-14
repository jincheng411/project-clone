import React, { useEffect, useState } from 'react';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useStateValue } from '../StateProvider.js';
import AddOnCard from './order/AddOnCard.jsx';
import MealCard from './checkout/MealCard.jsx';
import axios from 'axios';
import './Checkout.css';

function Checkout({ isVisible, toggleCheckout }) {
  const [state, dispatch] = useStateValue();
  const [addOn, setAddOn] = useState([]);
  const handleOnClick = () => {
    toggleCheckout();
  }
  var bg = document.getElementById("bg");
  window.onclick = function (event) {
    if (event.target === bg) {
      toggleCheckout();
    }
  }
  useEffect(() => {
    axios.get('/api/sections')
      .then((res) => {
        const addOnItems = [res.data[5].items[0], res.data[5].items[3], res.data[6].items[5]];
        setAddOn(addOnItems);
      })
  }, [setAddOn])
  console.log(addOn)
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

        <div className="checkout-scroll">
          <div className="margin">
            <MealCard />
            <MealCard />
          </div>

          <div className="checkout-addition">
            <p>COMPLETE YOUR MEAL</p>
            <div className="checkout-addition-cards">
              {addOn.map((item) => {
                return <AddOnCard item={item} />
              })}
            </div>
          </div>
          <div className="checkout-add-btn">
            <h3>ADD ANOTHER MENU ITEM</h3>
          </div>
          <div className="break-line"></div>

          <div className="checkout-summary">
            <div className="checkout-summary-total">
              <span className="checkout-summary-total-text">Bag Total</span>
              <span className="checkout-summary-total-price">$32.95</span>
            </div>
            <div className="checkout-add-btn">
              <h3>SIGN IN TO USE REWARD</h3>
            </div>
            <div class="checkout-promo-code margin">
              <input />
              <span>APPLY</span>
            </div>
            <div className="break-line margin"></div>
            <div className="checkout-summary-total">
              <span className="checkout-summary-total-subtotal bold-text ">Subtotal</span>
              <span className="checkout-summary-total-price bold-text">$32.95</span>
            </div>
            <div className="checkout-summary-tax">
              <span className="checkout-summary-total-subtotal">Tax</span>
              <span className="checkout-summary-total-price">$2.92</span>
            </div>
            <div className="break-line margin"></div>
            <div className="checkout-grand-total">
              <span className="checkout-summary-total-subtotal bold-text ">TOTAL</span>
              <span className="checkout-summary-total-price bold-text">$35.87</span>
            </div>
          </div>
        </div>
        <div className="checkout-btn">
          <span>CHECKOUT</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;