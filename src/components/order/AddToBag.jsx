import React from 'react';
import { useStateValue } from '../../StateProvider.js'
import './AddToBag.css';

function AddToBag() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="add-to-bag">
      <div className="meal-summary">
        <h3>YOUR MEAL</h3>
        {state.order.length > 0 ?
         <p>{state.order.map((order) =>
          order.name).join(' & ')}</p>
          :
          <p>Select a protein or veggie to get started</p>}

      </div>
      <div className="add-to-bag-btn">
        <h2>ADD TO BAG</h2>
      </div>
    </div>
  );
}

export default AddToBag;
