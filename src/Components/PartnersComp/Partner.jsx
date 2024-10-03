import React from 'react';
import './Partner.css'; 
import partnerbanner from "../../assets/homepage/partners/partnerbanner.jpg"
import ambrella from "../../assets/homepage/partners/ambarella.jpg"
import nvidia from "../../assets/homepage/partners/nividia.jpg"
import npx from "../../assets/homepage/partners/npx.jpg"
import qualcum from "../../assets/homepage/partners/qualcom.jpg"
import renesas from "../../assets/homepage/partners/renesas.jpg"
import sony from "../../assets/homepage/partners/sony.png"
import onsemi from "../../assets/homepage/partners/onsemi.png"
import omnivision from "../../assets/homepage/partners/omnivision.png"
import texai from '../../assets/homepage/partners/texas-instruments.png';
import latics from "../../assets/homepage/partners/lattice.png"

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
          <img src={sony} alt="Sensor Partner 1" className="partner-img" />
          <img src={onsemi} alt="Sensor Partner 2" className="partner-img" />
          <img src={nvidia} alt="Sensor Partner 2" className="partner-img" />
          <img src={omnivision} alt="Sensor Partner 2" className="partner-img" />
        </div>
      </div>
      <div className="partner-section">
        <h2 className="partner-subtitle">Host Platform Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={nvidia} alt="Host Platform 1" className="partner-img" />
          <img src={qualcum} alt="Host Platform 1" className="partner-img" />
          <img src={ambrella} alt="Host Platform 1" className="partner-img" />
          <img src={renesas} alt="Host Platform 1" className="partner-img" />
          <img src={texai} alt="Host Platform 1" className="partner-img" />
          <img src={npx} alt="Host Platform 1" className="partner-img" />
        </div>
      </div>
      <div className="partner-section">
        <h2 className="partner-subtitle">Semiconductor Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={latics} alt="Semiconductor Partner 1" className="partner-img" />
        </div>
      </div>
      {/* <div className="partner-section">
        <h2 className="partner-subtitle">NVIDIA Carrier Board Partners</h2>
        <div className="partner-underline"></div>
        <div className="partner-row">
          <img src={npx} alt="NVIDIA Partner 1" className="partner-img" />
          <img src={ambrella} alt="NVIDIA Partner 2" className="partner-img" />
          <img src={nvidia} alt="NVIDIA Partner 3" className="partner-img" />
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Partner;
