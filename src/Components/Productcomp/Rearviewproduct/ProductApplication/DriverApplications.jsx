import React from 'react';
import './DriverApplication.css'; 
import safereversing from "../../../../assets/Productpage/rearview/safe-reversing.jpg"
import Blindspot from "../../../../assets/Productpage/rearview/blindspot.jpg"
import trailer from "../../../../assets/Productpage/rearview/trailer-hitching-assistance.jpg"
import surroundview from "../../../../assets/Productpage/rearview/360surroundview.jpg"



const DriverApplications = () => {
  return (
    <div className="DriverApplication-container">
      <h1 className="DriverApplication-title">APPLICATIONS</h1>
      <div className="mainContainer">
        <div className="DriverApplication-boxes">
          <div className="DriverApplication-box" data-aos="fade-right" data-aos-duration="1800">
            <img src={safereversing} alt="Blind spot Monitoring" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Safe reversing</h1>
          </div>
          
          <div className="DriverApplication-box" data-aos="fade-left" data-aos-duration="1800">
            <img src={Blindspot} alt="360 Degree Surround View" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Blind spot detection</h1>
          </div>

          <div className="DriverApplication-box" data-aos="fade-right" data-aos-duration="1600">
            <img src={trailer} alt="Rear View Camera" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Trailer hitching assistance</h1>
          </div>

          <div className="DriverApplication-box" data-aos="fade-left" data-aos-duration="1600">
            <img src={surroundview} alt="Lane Assist" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Surround View System integration</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverApplications;
