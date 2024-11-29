import React from 'react';
import './AnimationButton.css';
import { Link } from 'react-router-dom';

const AnimationButton = ({
  text = 'know more', 
  className = '', 
  backgroundColor = '#344ea1', 
  textColor = '#def9fc', 
  hoverBackgroundColor = '#def9fc',
  hoverTextColor = '#344ea1', 
  onClick, 
  to, 
  ...props
}) => {
  return (
    <div className="btn-container">
      <Link
        to={to}
        className={`btn ${className}`}
        style={{
          '--btn-bg-color': backgroundColor,
          '--btn-text-color': textColor,
          '--btn-hover-bg-color': hoverBackgroundColor,
          '--btn-hover-text-color': hoverTextColor,
        }}
        onClick={onClick}
        {...props}
      >
        {text}
      </Link>
    </div>
  );
};

export default AnimationButton;
