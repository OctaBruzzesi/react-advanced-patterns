import React from 'react';
import './Accordion.css';
import Button from '../Button';

const Collapsible = ({ open, onClick, title, content }) => {
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
          {content}
        </div>
      }
      
    </div>
  )
}

export default Collapsible;
