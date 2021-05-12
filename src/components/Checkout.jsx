import React, { useEffect, useState } from 'react';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useStateValue } from '../StateProvider.js';
import AddOnCard from './order/AddOnCard.jsx';
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
        <div className="checkout-list">

          <div className="checkout-list-indiv">
            <div className="checkout-customer">
              <input type="text" value="Jin" />
              <h5>$10.30</h5>
            </div>
            <div className="checkout-product">
              <h5>Steak Burrito</h5>
              <h5>$10.30</h5>
            </div>
            <div className="checkout-product-detail">
              <p>Steak (½), Chicken (½), Brown Rice, Tomatillo-Green Chili Salsa, Fresh Tomato Salsa, Pinto Beans (½), and Black Beans (½)</p>
            </div>
            <div className="checkout-product-ops">
              <span>REMOVE</span>
              <span>EDIT</span>
              <span>DUPLICATE</span>
            </div>
            <div className="checkout-product-underline"></div>
          </div>

          <div className="checkout-list-indiv">
            <div className="checkout-customer">
              <input type="text" value="Jin" />
              <h5>$10.30</h5>
            </div>
            <div className="checkout-product">
              <h5>Steak Burrito</h5>
              <h5>$10.30</h5>
            </div>
            <div className="checkout-product-detail">
              <p>Steak (½), Chicken (½), Brown Rice, Tomatillo-Green Chili Salsa, Fresh Tomato Salsa, Pinto Beans (½), and Black Beans (½)</p>
            </div>
            <div className="checkout-product-ops">
              <span>REMOVE</span>
              <span>EDIT</span>
              <span>DUPLICATE</span>
            </div>
          </div>
        </div>
        <div className="checkout-addition">
          <p>COMPLETE YOUR MEAL</p>
          <div className="checkout-addition-cards">
            {addOn.map((item) => {
              return <AddOnCard item={item} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;