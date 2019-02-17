import React from 'react';
import './ScrollUp.css'



const ScrollUp = ({onRouteChange}) => {
  return (
    <div className="up-scroll pointer">
      <i className="fas fa-chevron-circle-up" onClick={() => onRouteChange('top')}  id="icon-scroll"></i>
    </div>
  )
}
export default ScrollUp;