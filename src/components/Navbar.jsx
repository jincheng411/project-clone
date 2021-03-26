import React from 'react';
import './Navbar.css';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <SubjectIcon className="subject" />
        <img src="/image/logo.svg" />
        <div className="sign-in">
          <PersonOutlineIcon className="sign-in-icon" />
          <p>SIGN IN</p>
        </div>
      </div>
      <div className="mid-section">
        <img src="/image/pepper-small.svg" />
        <span className="separator" />
        <div className="mid-section-text">
          <p>pickup from</p>
          <small>185 7th Ave</small>
        </div>
      </div>
      <div className="right-section">
        <LocalMallOutlinedIcon className="bag-icon" />
      </div>
    </div>
  )
}
export default Navbar;
