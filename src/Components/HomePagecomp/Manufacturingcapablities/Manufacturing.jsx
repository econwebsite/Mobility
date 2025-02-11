import React from 'react';
import './Manufacturing.css'; 
import manufact from "../../../assets/homepage/manufacturing-img.png";

const Manufacturing = () => {
  return (
    <div className="manufacturing-container">
      <h1 className="manufacturing-title">MANUFACTURING CAPABILITY</h1>
      <div className='mainContainer'>
        <div className="manufacturing-content">
          <div className="manufacturing-left-column" data-aos="fade-right" data-aos-duration="1800">
            <p>
              At e-con Systems, we maintain industry-leading manufacturing processes to ensure our ADAS cameras meet the highest quality and reliability standards required for mobility applications. Our production facilities are equipped with advanced tools for lens alignment, lens gluing, perfect ISP tuning, and more.
            </p>
            
            <div className="manufacturing-grid">
              <div className="manufacturing-box">ISP Tuning and Testing</div>
              <div className="manufacturing-box">Lens Focusing and Gluing</div>
              <div className="manufacturing-box">Active Alignment Machines</div>
              <div className="manufacturing-box">Robust Design for Reliability</div>
              <div className="manufacturing-box">Rugged Testing for Harsh Environment</div>
            </div>

          </div>
          <div className="manufacturing-right-column" data-aos="fade-left" data-aos-duration="1800">
            <img
              src={manufact}
              alt="Manufacturing"
              className="manufacturing-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
