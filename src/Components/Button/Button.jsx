import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

function Button({ text, to, onClick, className }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e); 
    } else if (to) {
      navigate(to); 
    }
  };

  return (
    <button type='button' className={`btn ${className || ''}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;

