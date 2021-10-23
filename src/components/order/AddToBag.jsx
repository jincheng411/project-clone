import React from 'react';
import { useStateValue } from '../../StateProvider.js'
import './AddToBag.css';

function AddToBag(addToBag) {
  const [state, dispatch] = useStateValue();
  const handleClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
    })
  }
  return (
    <div className="add-to-bag">
      <div className="meal-summary">
        <h3>YOUR MEAL</h3>
        {state['protein'].items.length > 0 ?
         <p>{state['protein'].items.map((order) =>
          order.name).join(' & ')} Burrito</p>
          :
          <p>Select a protein or veggie to get started</p>}

      </div>
      <div className="add-to-bag-btn" onClick={handleClick}>
        <h2>ADD TO BAG</h2>
      </div>
    </div>
  );
}

export default AddToBag;
