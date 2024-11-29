import React from 'react';
import './ShelfKey.css';
import fourk from "../../../assets/productpage/4k.png";
import wideangle from "../../../assets/productpage/wideangle.png";
import flexible from "../../../assets/productpage/flexible.png";
import lowpower from "../../../assets/productpage/lowpower.png";
import configurable from "../../../assets/productpage/configurable.png";
import gdpr from "../../../assets/productpage/gdpr.png";
import customenclosure from "../../../assets/productpage/customenclosure.png";
import rechargebattery from "../../../assets/productpage/rechargebattery.png";

const ShelfKey = () => {
  const data = [
    { icon: fourk, title: 'High-Resolution (13 MP Sensor)', description: 'Captures high-quality image for accurate analysis.' },
    { icon: wideangle, title: 'Wide-Angle Optics (120-degree FOV)', description: 'Expansive view covers multiple racks, eliminating blind spots.' },
    { icon: flexible, title: 'Flexible Capture Modes', description: 'Supports continuous and scheduled modes.' },
    { icon: lowpower, title: 'Low-Power Wi-Fi', description: 'Ensures smooth data transmission without power drain.' },
    { icon: configurable, title: 'Configurable Status LED', description: 'Allows easy monitoring of camera functionality.' },
    { icon: gdpr, title: 'GDPR Compliance', description: 'Prevents image capture of people for legal safety.' },
    { icon: customenclosure, title: 'Custom Enclosures', description: 'Durable and adaptable to retail environments.' },
    { icon: rechargebattery, title: 'Rechargeable Battery', description: 'Easy installation in dynamic retail aisles.' },
  ];

  return (
    <div className="key-features-container">
      <h1 className="key-features-title">Key Features of SHELFVista Camera</h1>
      <div className='mainContainer'>
      <div className="key-features-staircase">
        {data.map((item, index) => (
          <div className="key-features-card" key={index}>
            <div className="key-features-icon-container">
              <img src={item.icon} alt={item.title} className="key-features-icon" />
            </div>
            <h2 className="key-features-title-text">{item.title}</h2>
            <p className="key-features-text">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ShelfKey;
