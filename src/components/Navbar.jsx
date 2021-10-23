import React, {useState} from 'react';
import Checkout from './Checkout.jsx';
import './Navbar.css';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { Link } from 'react-router-dom';
import BagIcon from'./BagIcon.jsx';

function Navbar() {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const handleOnClick = () => {
    setCheckoutVisible(!checkoutVisible);
  }
  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/"><img src="/image/logo.svg" alt="logo" /></Link>
        <div className="sign-in">
          <PersonOutlineIcon className="sign-in-icon" />
          <p>SIGN IN</p>
        </div>
      </div>
      <div className="mid-section">
        <img src="/image/pepper-small.svg" alt="pepper" />
        <span className="separator" />
        <div className="mid-section-text">
          <p>pickup from</p>
          <small>185 7th Ave</small>
        </div>
      </div>
      <div className="right-section">
      <BagIcon handleOnClick={handleOnClick}/>
      </div>
      <Checkout isVisible={checkoutVisible} toggleCheckout={handleOnClick}/>
    </div>
  )
}
export default Navbar;
