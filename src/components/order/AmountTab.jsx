import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './AmountTab.css';

function AmountTab({ amount, quantity, isVisible, hideAmount }) {
  return (
    <div className={`amount-tab ${isVisible && "tab-visible"}`} onClick={hideAmount} >
      {(amount === '1') && <span><CheckIcon style={{'font-size': '2rem', 'font-weight': '800'}} /></span>}
      {(amount &&  amount!== '1') && <span>{amount}</span>}
      {quantity && <span>{quantity}</span>}
    </div>
  )
}

export default AmountTab;