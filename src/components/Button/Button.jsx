import React from 'react';
import './Button.css';

const Button = ({ onClick, label, style }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  )
}

export default Button;
