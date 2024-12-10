import React from 'react';
import './AnimationButton.css';
import { Link } from 'react-router-dom';

const AnimationButton = ({
  text = 'Hover!',
  className = '',
  backgroundColor = '#344ea1',  
  hoverColor = '#262626',       
  onClick,
  to,
  ...props
}) => {
  return (
    <div>
    <Link to={to} className='buttonLink' style={{textDecoration:"none"}}>
    <button
      className={`AnimationButton-custom-button ${className}`}
      style={{ backgroundColor }} 
      {...props}
    >
      <span className="AnimationButton-box" style={{ backgroundColor }}>
        {text}
      </span>
    </button>
    </Link>
    </div>
  );
};

export default AnimationButton;
