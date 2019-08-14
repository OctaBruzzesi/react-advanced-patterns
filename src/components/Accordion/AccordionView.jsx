import React from 'react';
import './Accordion.css';
import Button from '../Button';

const Accordion = ({ open, onClick, title, children }) => {
  return (
    <div className="collapsible">
      <div className="accordion__banner">
        <Button
          label={title}
          onClick={onClick}
        />
      </div>
      {
        open &&
        <div className="accordion__content">
          {children}
        </div>
      }
      
    </div>
  )
}

export default Accordion;
