import React from 'react';
import './PopupModal.css';

const PopupModal = ({ show, onClose, imageUrl, linkUrl }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>&times;</button>
        <a href={linkUrl} >
          <img src={imageUrl} alt="Popup" className="popup-image" />
        </a>
      </div>
    </div>
  );
};

export default PopupModal;
