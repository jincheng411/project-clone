import React, {useState}from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomizeTab from './CustomizeTab.jsx';
import AmountTab from './AmountTab.jsx';
import ItemOptions from './ItemOptions.jsx';
import './OrderCard.css';

function OrderCard({item}) {
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
          <div className="cost">$9.25</div>
          <div className="cal">120 cal</div>
        </div>
      </div>
      <CustomizeTab isVisible={optionTabVisible}/>
      <AmountTab amount={'1'} isVisible={amountTabVisible}/>
      <div className="more-option" onMouseEnter={handleOnMouseEnterOption} onMouseLeave={handleOnMouseLeaveOption} onClick={handleOptionsClick} >
        <MoreVertIcon />
      </div>
      <ItemOptions options={[{name: 'normal'}, {name: 'double', note: '+$3.15'}]} isVisible={optionsVisible} clickToClose={handleOptionsClick}/>
      <div className="hover-effect" onClick={handleAmountTab}></div>
    </div>
  );
}

export default OrderCard;
