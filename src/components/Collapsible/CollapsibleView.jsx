import React from 'react';
import './Collapsible.css';

const Collapsible = ({ open, onClick, title, content }) => {
  return (
    <div className="collapsible">
      <button className="collapsible__banner" onClick={onClick}>
        {title}
      </button>
      {
        open &&
        <div className="collapsible__content">
          {content}
        </div>
      }
      
    </div>
  )
}

export default Collapsible;
