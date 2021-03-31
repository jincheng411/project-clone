import React from 'react';
import './AmountTab.css';

function AmountTab({ amount, quantity }) {
  return (
    <div className="amount-tab">
      {amount === '1' && <span>&#10003;</span>}
      {(amount &&  amount!== '1') && <span>{amount}</span>}
      {quantity && <span>{quantity}</span>}
    </div>
  )
}

export default AmountTab;