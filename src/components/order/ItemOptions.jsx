import React from 'react';
import './ItemOptions.css'

function ItemOptions({ options, isVisible, clickToClose, changeOption }) {

  const handleOnClick = (index) => {
    changeOption(index);
    clickToClose();
  }

  return (
    <div className={`item-options ${isVisible && "tab-visible"}`}>
      <div className="item-options-content">
        {options.map((option, index) =>
          <div className="item-option" key={option.name} onClick={() => { handleOnClick(index) }}> {`${option.name} ${option.note || ''}`}</div>
        )}
      </div>
      <div className="item-options-back" onClick={clickToClose}>&lt;</div>
    </div>
  )
}

export default ItemOptions;
