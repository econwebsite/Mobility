import React, { useState } from 'react';
import './Modelbutton.css';
import Modelform from './Modelform';

const Modelbutton = ({
  text = 'Contact Us',
  backgroundColor = '#344ea1',
  animationColor = '#69ba2f',
  hoverColor = '#69ba2f',
  className = '',
  productName = null,
  docName = null,
  title = null,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button
        className={`ModelButton-custom-button ${className}`}
        style={{
          backgroundColor,
          color: 'white',
          '--animation-color': animationColor,
          '--hover-color': hoverColor,
        }}
        onClick={showModal}
      >
        <span className="ModelButton-box">{text}</span>
      </button>

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
        type={text === 'Contact Us' ? `contact` : `download`}
        productName={productName || null}
        docName={docName || null}
        title={title || null}
      />
    </div>
  );
};

export default Modelbutton;
