import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomizeTab from './CustomizeTab.jsx';
import ExcessTab from './ExcessTab.jsx';
import AmountTab from './AmountTab.jsx';
import ItemOptions from './ItemOptions.jsx';
import { useStateValue } from '../../StateProvider.js'
import './OrderCard.css';

function OrderCard({ item, category }) {
  const [state, dispatch] = useStateValue();
  const [optionTabVisible, setOptionTabVisible] = useState(false);
  const [excessTabVisible, setExcessTabVisible] = useState(false);
  const [amountTabVisible, setAmountTabVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [amount, setAmount] = useState('1');
  const [isSelected, setIsSelected] = useState(false);
  const handleOnMouseEnterOption = () => {
    setOptionTabVisible(true);
  }
  const handleOnMouseLeaveOption = () => {
    setOptionTabVisible(false);
  }
  const handleOnClick = () => {
    for (let orderItem of state[category].items) {
      if (orderItem.name === item.name) {
        console.log('removing')
        dispatch({
          type: 'REMOVE_FROM_ORDER',
          item: {
            name: item.name,
            category: category,
          }
        })
        console.log(state)

        setAmountTabVisible(!amountTabVisible);
        setIsSelected(!isSelected);
        return;
      }
    }

    if ((category !== 'protein' &&
      category !== 'rice' &&
      category !== 'beans') ||
      state[category].items.length < 2) {
      setAmount('1');
      setAmountTabVisible(!amountTabVisible);
      setIsSelected(!isSelected);
      dispatch({
        type: 'ADD_TO_ORDER',
        item: {
          name: item.name,
          category: category,
          price: item.price ? Number(item.price[0]) : undefined,
          option: item.options.length > 0 ? item.options[0].name : undefined,
        },
      })
    // }
    // else if ((category === 'protein' ||
    //   category === 'rice' ||
    //   category === 'beans') &&
    //   state[category].items.length === 2) {

    } else {
      setExcessTabVisible(true);
      setTimeout(() => {
        setExcessTabVisible(false);
      }, 2200)
    }

    console.log(state)
  }
  const handleOptionsClick = () => {
    setOptionsVisible(!optionsVisible);
  }

  const handleOptionChange = (index) => {
    for (let orderItem of state[category].items) {
      if (orderItem.name === item.name) {
        dispatch({
          type: 'CHANGE_OPTION',
          item: {
            name: item.name,
            category: category,
            option: item.options[index],
          }
        })
        const amountVal = item.options[index].name
        setAmount(amountVal === 'normal' ? '1' : amountVal);
        return;
      }
    }

    if ((category !== 'protein' &&
      category !== 'rice' &&
      category !== 'beans') ||
      state[category].length < 2) {
      setAmountTabVisible(!amountTabVisible);
      setIsSelected(!isSelected);
      dispatch({
        type: 'ADD_TO_ORDER',
        item: {
          name: item.name,
          category: category,
          price: item.price ? Number(item.price[0]) : undefined,
          option: item.options.length > 0 ? item.options[0].name : undefined,
        },
      })
    } else {
      setExcessTabVisible(true);
      setTimeout(() => {
        setExcessTabVisible(false);
      }, 2200)
    }

    dispatch({
      type: 'CHANGE_OPTION',
      item: {
        name: item.name,
        category: category,
        option: item.options[index],
      }
    })
    const amountVal = item.options[index].name
    setAmount(amountVal === 'normal' ? '1' : amountVal);
    console.log(state)
  }

  return (
    <div className={`order-card ${isSelected && "card-selected"}`}>
      <img src={item.img} alt="section" />
      <div className="order-card-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="cost-and-cal">
          {item.price && <div className="cost">${item.price[0]}</div>}
          <div className="cal">{item.cal} cal</div>
        </div>
      </div>
      <CustomizeTab isVisible={optionTabVisible} />
      <ExcessTab isVisible={excessTabVisible} />

      <AmountTab amount={amount} isVisible={amountTabVisible} hideAmount={handleOnClick} />

      {/* -----more option ----- */}
      {item.options.length > 0 && <div className="more-option" onMouseEnter={handleOnMouseEnterOption} onMouseLeave={handleOnMouseLeaveOption} onClick={handleOptionsClick} >
        <MoreVertIcon />
      </div>}
      <ItemOptions options={item.options} isVisible={optionsVisible} clickToClose={handleOptionsClick} changeOption={handleOptionChange} />

      <div className="hover-effect" onClick={handleOnClick}></div>
    </div>
  );
}

export default OrderCard;
