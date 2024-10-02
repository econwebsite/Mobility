import React from 'react';
import './Partner.css'; 
import partnerbanner from "../../assets/homepage/partners/partnerbanner.jpg"
import ambrella from "../../assets/homepage/partners/ambarella.jpg"
import nvidia from "../../assets/homepage/partners/nividia.jpg"
import npx from "../../assets/homepage/partners/npx.jpg"
import platformsupport from "../../assets/homepage/partners/Platformsupport.jpg"
import qualcum from "../../assets/homepage/partners/qualcom.jpg"
import renesas from "../../assets/homepage/partners/renesas.jpg"


const Partner = () => {
  return (
    <div className="partner-ecosystem">
            <div className="mainContainer">
      <div className="partner-banner">
        <img src={partnerbanner} alt="Banner" className="partner-banner-img" />
      </div>

      <div className="partner-section">
        <h1 className="partner-title">Partners Ecosystem</h1>
        <div className="partner-underline"></div>
      </div>

      <div className="partner-section">
        <h2 className="partner-subtitle">Sensor and ISP Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={ambrella} alt="Sensor Partner 1" className="partner-img" />
          <img src={nvidia} alt="Sensor Partner 2" className="partner-img" />
        </div>
      </div>
      <div className="partner-section">
        <h2 className="partner-subtitle">Host Platform Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={platformsupport} alt="Host Platform 1" className="partner-img" />
          <img src={qualcum} alt="Host Platform 2" className="partner-img" />
        </div>
      </div>
      <div className="partner-section">
        <h2 className="partner-subtitle">Semiconductor Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={ambrella} alt="Semiconductor Partner 1" className="partner-img" />
          <img src={renesas} alt="Semiconductor Partner 2" className="partner-img" />
        </div>
      </div>
      <div className="partner-section">
        <h2 className="partner-subtitle">NVIDIA Carrier Board Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={npx} alt="NVIDIA Partner 1" className="partner-img" />
          <img src={ambrella} alt="NVIDIA Partner 2" className="partner-img" />
          <img src={nvidia} alt="NVIDIA Partner 3" className="partner-img" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Partner;
