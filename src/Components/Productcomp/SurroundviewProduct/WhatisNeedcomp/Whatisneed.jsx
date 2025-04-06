import React from 'react';
import "./Whatisneed.css";
import hdr from "../../../../assets/Productpage/surroundview/hdr.png";
import highsensitivity from "../../../../assets/Productpage/surroundview/high-sensitivity.png"
import longrange from "../../../../assets/Productpage/surroundview/long-range-interface.png"
import Compatibility from "../../../../assets/Productpage/surroundview/compatablity-platform.png"
import camerasync from "../../../../assets/Productpage/surroundview/camera-synchronization.png"
import highperformance from "../../../../assets/Productpage/surroundview/high-performance-isp.png"

const Whatisneed = () => {
  return (
    <div className="whatis-container">
      <div className="mainContainer">
        <div className="whatis-containerparagraph">
          <p className="whatis-standparagraphtext">
          Our surround view systems utilize multi-camera setups to provide a comprehensive 360-degree view of the vehicle’s surroundings. By synchronizing multiple cameras, these systems get a stitched, composite image that eliminates blind spots, thereby enhancing driver awareness and safety. This real-time bird's-eye view is crucial for parking assistance, obstacle detection, lane detection, traffic sign recognition, and maneuvering in tight spaces, all of which support the advanced functionalities of ADAS.    </p>
        
        </div>

        <h1 className="whatis-title">What is needed?</h1>
        <br />

        <div className="whatis-grid">
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={hdr} alt="Resolution" className="whatis-image" />
              <p>High Dynamic Range</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={highsensitivity} alt="High Frame Rate" className="whatis-image" />
              <p>High sensitivity</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={longrange} alt="Global Shutter" className="whatis-image" />
              <p>Long range interface</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={Compatibility} alt="Global Shutter" className="whatis-image" />
              <p>Compatibility platforms</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={camerasync} alt="Global Shutter" className="whatis-image" />
              <p>Camera synchronization</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={highperformance} alt="Global Shutter" className="whatis-image" />
              <p>High performance ISP</p>
            </div>
          </div>
         
          
        </div>

        <br />
        <h1 className="whatis-econ">e-con Cameras for Surround-view</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
