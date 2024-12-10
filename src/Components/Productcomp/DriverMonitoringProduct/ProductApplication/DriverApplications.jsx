import React from 'react';
import './DriverApplication.css'; 
import distraction from "../../../../assets/Productpage/drivermonitoring/distraction-dowziness.jpg"
import dangerous from "../../../../assets/Productpage/drivermonitoring/dangerous-behaviour.jpg"
import object from "../../../../assets/Productpage/drivermonitoring/object-dedection.jpg"
import bodyposture from '../../../../assets/Productpage/drivermonitoring/body-posture.jpg';


const DriverApplications = () => {
  return (
    <div className="DriverApplication-container">
      <h1 className="DriverApplication-title">APPLICATIONS</h1>
      <div className="mainContainer">
        <div className="DriverApplication-boxes">
          <div className="DriverApplication-box" data-aos="fade-right" data-aos-duration="1800">
            <img src={distraction} alt="Blind spot Monitoring" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Distraction & Drowsiness</h1>
          </div>
          
          <div className="DriverApplication-box" data-aos="fade-left" data-aos-duration="1800">
            <img src={dangerous} alt="360 Degree Surround View" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Dangerous Behavior</h1>
          </div>

          <div className="DriverApplication-box" data-aos="fade-right" data-aos-duration="1600">
            <img src={object} alt="Rear View Camera" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Object Detection</h1>
          </div>

          <div className="DriverApplication-box" data-aos="fade-left" data-aos-duration="1600">
            <img src={bodyposture} alt="Lane Assist" className="DriverApplication-image" />
            <h1 className="DriverApplication-boxTitle">Body Posture</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverApplications;
