import React, { useState } from 'react';
import AnimationButton from './AnimationButton'; 
import "./Modelbutton.css";
import Modelform from './Modelform';

const Modelbutton = ({
  text = 'Contact Us',
  backgroundColor = '#f9cd47',        
  textColor = '#131b2d',             
  hoverBackgroundColor = '#def9fc',    
  hoverTextColor = '#344ea1',        
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
      <AnimationButton
        text={text}
        backgroundColor={backgroundColor}        
        textColor={textColor}                
        hoverBackgroundColor={hoverBackgroundColor} 
        hoverTextColor={hoverTextColor}          
        className={`newanimation ${className}`}
        onClick={showModal}
      />

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
