import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './AmountTab.css';

function AmountTab({ amount, quantity, isVisible, hideAmount }) {
  return (
    <div className={`amount-tab ${isVisible && "tab-visible"}`} onClick={hideAmount} >
      {(amount === '1') && <span className="amount-tab-icon"><CheckIcon /></span>}
      {(amount &&  amount === 'double') && <span className="amount-tab-icon">2x</span>}
      {((amount &&  amount !== '1') && (amount &&  amount !== 'double')) && <span>{amount}</span>}
      {quantity && <span >{quantity}</span>}
    </div>
  )
}

export default AmountTab;