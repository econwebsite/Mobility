import React from 'react';
import './DriverApplication.css'; 
import view from "../../../../assets/Productpage/360surroundview.jpg";
import blindspot from "../../../../assets/Productpage/blindspot.jpg";
import rearview from "../../../../assets/Productpage/blindspot.jpg";
import laneassist from "../../../../assets/Productpage/blindspot.jpg";

const DriverApplications = () => {
  return (
    <div className="DriverApplication-container">
      <h1 className="DriverApplication-title">APPLICATIONS</h1>
      <div className="mainContainer">
        <div className="DriverApplication-boxes">
          <div className="DriverApplication-box" data-aos="fade-right" data-aos-duration="1800">
            <img src={blindspot} alt="Blind spot Monitoring" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Distraction & Drowsiness</h1>
          </div>
          
          <div className="DriverApplication-box" data-aos="fade-left" data-aos-duration="1800">
            <img src={view} alt="360 Degree Surround View" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Dangerous Behavior</h1>
          </div>

          <div className="DriverApplication-box" data-aos="fade-right" data-aos-duration="1600">
            <img src={rearview} alt="Rear View Camera" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Object Detection</h1>
          </div>

          <div className="DriverApplication-box" data-aos="fade-left" data-aos-duration="1600">
            <img src={laneassist} alt="Lane Assist" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Body Posture</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverApplications;
