import React from 'react';
import './AmountTab.css';

function AmountTab({ amount, quantity, isVisible, hideAmount }) {
  return (
    <div className={`amount-tab ${isVisible && "tab-visible"}`} onClick={hideAmount} >
      {amount === '1' && <span>&#10003;</span>}
      {(amount &&  amount!== '1') && <span>{amount}</span>}
      {quantity && <span>{quantity}</span>}
    </div>
  )
}

export default AmountTab;