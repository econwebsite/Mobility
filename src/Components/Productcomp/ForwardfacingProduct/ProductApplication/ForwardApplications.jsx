import React from 'react';
import './ForwardApplication.css'; 
import view from "../../../../assets/Productpage/360surroundview.jpg";
import blindspot from "../../../../assets/Productpage/blindspot.jpg";
import rearview from "../../../../assets/Productpage/blindspot.jpg";
import laneassist from "../../../../assets/Productpage/blindspot.jpg";

const ForwardApplications = () => {
  return (
    <div className="ForwardApplication-container">
      <h1 className="ForwardApplication-title">APPLICATIONS</h1>
      <div className="mainContainer">
        <div className="ForwardApplication-boxes">
          <div className="ForwardApplication-box" data-aos="fade-right" data-aos-duration="1800">
            <img src={blindspot} alt="Blind spot Monitoring" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Forward Collision Warning</h1>
          </div>
          
          <div className="ForwardApplication-box" data-aos="fade-left" data-aos-duration="1800">
            <img src={view} alt="360 Degree Surround View" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Lane Departure Warning</h1>
          </div>

          <div className="ForwardApplication-box" data-aos="fade-right" data-aos-duration="1600">
            <img src={rearview} alt="Rear View Camera" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Traffic Sign Recognition</h1>
          </div>

          <div className="ForwardApplication-box" data-aos="fade-left" data-aos-duration="1600">
            <img src={laneassist} alt="Lane Assist" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Pedestrian Collision Warning</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardApplications;
