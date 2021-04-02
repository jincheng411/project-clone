import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomizeTab from './CustomizeTab.jsx';
import AmountTab from './AmountTab.jsx';
import ItemOptions from './ItemOptions.jsx';
import { useStateValue } from '../../StateProvider.js'
import './OrderCard.css';

function OrderCard({ item }) {
  const [state, dispatch] = useStateValue();
  const [optionTabVisible, setOptionTabVisible] = useState(false);
  const [amountTabVisible, setAmountTabVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  // const handleOnMouseEnter = (e) => {
  //   console.log(e.target.id)
  // }
  const handleOnMouseEnterOption = () => {
    setOptionTabVisible(true);
  }
  const handleOnMouseLeaveOption = () => {
    setOptionTabVisible(false);
  }
  const handleAmountTab = () => {
    setAmountTabVisible(!amountTabVisible);
    setIsSelected(!isSelected);
    dispatch({
      type: 'ADD_TO_ORDER',
      item: {
              name: item.name,
              price: Number(item.price[0]),
              option: item.options.length > 0 ? item.options[0].name : undefined
            },
    })
    console.log(state.order)
  }
  const handleOptionsClick = () => {
    setOptionsVisible(!optionsVisible);
  }
  return (
    <div className={`order-card ${isSelected && "card-selected"}`}>
      <img src={item.img} alt="section" />
      <div className="order-card-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="cost-and-cal">
          <div className="cost">{item.price[0]}</div>
          <div className="cal">{item.cal} cal</div>
        </div>
      </div>
      <CustomizeTab isVisible={optionTabVisible} />
      <AmountTab amount={'1'} isVisible={amountTabVisible} hideAmount={handleAmountTab} />

      {/* -----more option ----- */}
      {item.options.length > 0 && <div className="more-option" onMouseEnter={handleOnMouseEnterOption} onMouseLeave={handleOnMouseLeaveOption} onClick={handleOptionsClick} >
        <MoreVertIcon />
      </div>}
      <ItemOptions options={item.options} isVisible={optionsVisible} clickToClose={handleOptionsClick} />

      <div className="hover-effect" onClick={handleAmountTab}></div>
    </div>
  );
}

export default OrderCard;
