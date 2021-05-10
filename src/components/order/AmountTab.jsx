import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './AmountTab.css';

function AmountTab({ amount, quantity, isVisible, hideAmount }) {
  return (
    <div className={`amount-tab ${isVisible && "tab-visible"}`} onClick={hideAmount} >
      {(amount === '1') && <span className="amount-tab-icon">&#10003;</span>}
      {((amount &&  amount !== '1' && amount !== '1x' && amount !== '2x' && amount !== '1/2' )) && <span>{amount}</span>}
      {((amount &&  amount === '1x') || (amount &&  amount === '2x') || (amount &&  amount === '1/2')) && <span className="amount-tab-icon">{amount}</span>}
      {quantity && <span >{quantity}</span>}
    </div>
  )
}

export default AmountTab;