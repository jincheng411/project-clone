import React, {useState}from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CustomizeTab from './CustomizeTab.jsx';
import AmountTab from './AmountTab.jsx';
import './OrderCard.css';

function OrderCard({item}) {
  const [visible, setVisible] = useState(false);
  const handleOnMouseEnter = (e) => {
    console.log(e.target.id)
  }
  const handleOnMouseEnterOption = () => {
    setVisible(true);
  }
  const handleOnMouseLeaveOption = () => {
    setVisible(false);
  }
  return (
    <div className="order-card ">
      <img src="https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6601-chicken/web-mobile/order.png" alt="section" />
      <div className="order-card-content">
        <h2>chicken</h2>
        <p>chicken protein</p>
        <div className="cost-and-cal">
          <div className="cost">$9.25</div>
          <div className="cal">120 cal</div>
        </div>
      </div>
      <CustomizeTab isVisible={visible}/>
      <AmountTab />
      <div className="more-option" onMouseEnter={handleOnMouseEnterOption} onMouseLeave={handleOnMouseLeaveOption}>
        <MoreVertIcon />
      </div>
      <div className="hover-effect" id={`${item}layover`} onMouseEnter={handleOnMouseEnter}></div>
    </div>
  );
}

export default OrderCard;
