import React, { useState } from 'react';
import './Modelbutton.css';
import Modelform from './Modelform';

const Modelbutton = ({
  text = 'Contact Us',
  backgroundColor = '#344ea1',
  hoverColor = '#262626',
  className = '',
  productName = null,
  docName = null,
  type = 'contact',
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
        style={{ backgroundColor }}
        onClick={showModal}
      >
        <span className="ModelButton-box" style={{ backgroundColor }}>
          {text}
        </span>
      </button>

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
        productName={productName}
        docName={docName || null}
        title={title || null}
        type={type}
      />
    </div>
  );
};

export default Modelbutton;
