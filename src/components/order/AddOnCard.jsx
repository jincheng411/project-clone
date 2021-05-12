import React from 'react';
import './AddOnCard.css';
function AddOnCard({item}) {
  return (
    <div className="add-on-card">
      <img src={item.img}/>
      <span>{item.name}</span>
      <p>$ {item.price}</p>
    </div>
  )
}

export default AddOnCard;