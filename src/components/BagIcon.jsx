import React, {useState} from 'react';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './BagIcon.css';
import { useStateValue } from '../StateProvider.js'


function BagIcon({ handleOnClick }) {
  const [state, dispatch] = useStateValue();
  return (
    <div className="nav-bag-icon" onClick={() => (handleOnClick())}>
      {state.mealCount > 0 && <span className="nav-bag-icon-count">{state.mealCount}</span>}
      <span><LocalMallOutlinedIcon className="bag-icon" /></span>
    </div>
  );
}

export default BagIcon;
