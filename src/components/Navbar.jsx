import React from 'react';
import './Navbar.css';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <div className="subject">
          <SubjectIcon />
        </div>
        <img src="/image/logo.svg" />
        <PersonOutlineIcon />
      </div>
      <div className="mid-section">
        <img src="/image/pepper-small.svg" />
        <p>pickup from</p>
        <small>185 7th Ave</small>
      </div>
      <div className="right-section">
        <LocalMallOutlinedIcon />
      </div>
    </div>
  )
}
export default Navbar;
