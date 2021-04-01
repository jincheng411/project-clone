import React from 'react';
import './CustomizeTab.css'

function CustomizeTab({ isVisible }) {
  return (
    <div className={`customize-tab ${isVisible && "tab-visible"}`}>Click to customize >>></div>
  )
}

export default CustomizeTab;
