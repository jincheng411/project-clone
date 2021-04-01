import React from 'react';
import './ItemOptions.css'

function ItemOptions({ options, isVisible, clickToClose }) {
  return (
    <div className={`item-options ${isVisible && "tab-visible"}`}>
      <div className="item-options-content">
        {options.map((option) =>
          <div className="item-option" key={option.name}> {`${option.name} ${option.note || ''}`}</div>
        )}
      </div>
      <div className="item-options-back" onClick={clickToClose}>&lt;</div>
    </div>
  )
}

export default ItemOptions;
