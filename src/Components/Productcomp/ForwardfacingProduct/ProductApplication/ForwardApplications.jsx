import React from 'react';
import './ForwardApplication.css'; 
import forward from "../../../../assets/Productpage/forwardfacing/forward-collosion.jpg"
import lane from "../../../../assets/Productpage/forwardfacing/lane-depture.jpg"
import trafic from '../../../../assets/Productpage/forwardfacing/traffic-signal.jpg';
import presidian from "../../../../assets/Productpage/forwardfacing/presidian-collsion.jpg"

const ForwardApplications = () => {
  return (
    <div className="ForwardApplication-container">
      <h1 className="ForwardApplication-title">APPLICATIONS</h1>
      <div className="mainContainer">
        <div className="ForwardApplication-boxes">
          <div className="ForwardApplication-box" data-aos="fade-right" data-aos-duration="1800">
            <img src={forward} alt="Blind spot Monitoring" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Forward Collision Warning</h1>
          </div>
          
          <div className="ForwardApplication-box" data-aos="fade-left" data-aos-duration="1800">
            <img src={lane} alt="360 Degree Surround View" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Lane Departure Warning</h1>
          </div>

          <div className="ForwardApplication-box" data-aos="fade-right" data-aos-duration="1600">
            <img src={trafic} alt="Rear View Camera" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Traffic Sign Recognition</h1>
          </div>

          <div className="ForwardApplication-box" data-aos="fade-left" data-aos-duration="1600">
            <img src={presidian} alt="Lane Assist" className="ForwardApplication-image" />
            <h1 className="ForwardApplication-boxTitle">Pedestrian Collision Warning</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardApplications;
