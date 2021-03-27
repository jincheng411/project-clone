import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

function Product({ name, imgUrl }) {
  const handleOnMouseEnter = () => {
    document.getElementById(`order-${imgUrl}`).style.visibility = 'visible';
  };
  const handleOnMouseLeave = () => {
    document.getElementById(`order-${imgUrl}`).style.visibility = 'hidden';
  };
  return (
    <Link to="/order" className="menu-product" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <img src={process.env.PUBLIC_URL + imgUrl} alt="product" />
      <div className="menu-title">
        <h4>{name}</h4>
      </div>
      <div id={`order-${imgUrl}`}>
        <span>ORDER</span>
        <span className="order-arrow"><ArrowForwardIcon /></span>
      </div>

    </Link>
  );
}

export default Product;
