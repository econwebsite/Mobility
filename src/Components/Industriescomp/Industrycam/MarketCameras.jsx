import React from 'react';
import { useNavigate } from 'react-router-dom';
import './marketcameras.css';

const Marketcameras = ({ singleimg, buttons }) => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div className="Marketcameras-wrapper">
      <div className="SingleImage-container">
        <img src={singleimg} alt="Camera Banner" className="SingleImage-img" />
      </div>
      <div className="ButtonRow">
        {buttons.map((btn, index) => (
          <button key={index} className="Market-btn" onClick={() => handleNavigation(btn.link)}>
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketcameras;
