import React from 'react';
import './ExcessTab.css'

function ExcessTab({ isVisible }) {
  return (
    <div className={`excess-tab ${isVisible && "fade-in-out"}`}>You can only select 2 items.</div>
  )
}

export default ExcessTab;