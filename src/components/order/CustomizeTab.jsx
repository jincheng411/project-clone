import React from 'react';

function CustomizeTab({ isVisible }) {
  return (
    <div className={`customize-tab ${isVisible && "customize-tab-visible"}`}>Click to customize >>></div>
  )
}

export default CustomizeTab;
