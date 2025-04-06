import React from 'react';
import "./Whatisneed.css";
import Resolution from "../../../../assets/Productpage/drivermonitoring/resolution.png";
import globalshutter from "../../../../assets/Productpage/drivermonitoring/globalshutter.png";
import hightframe from "../../../../assets/Productpage/drivermonitoring/highframe-rate.png";
import nir from "../../../../assets/Productpage/drivermonitoring/nir-sensivity.png";

const Whatisneed = () => {
  return (
    <div className="whatis-container">
      <div className="mainContainer">
        <div className="whatis-containerparagraph">
          <p className="whatis-standparagraphtext">
          In-cabin monitoring system cameras are designed to enhance road safety by tracking driver behavior and alertness. With high frame rate and global shutter performance, along with excellent near-infrared (NIR) capabilities, these industrial-grade cameras are highly effective in detecting signs of drowsiness or distraction. This capability is critical for accident prevention and plays a key role in the functionality of advanced driver-assistance systems (ADAS). The integration of RGB-IR technology enables the cameras to capture clear images in both visible and infrared light without the need for mechanical filters. This feature ensures reliable performance both day and night and contributes to the camera’s extended lifespan.
          </p>
        </div>

        <h1 className="whatis-title">What is needed?</h1>
        <br />

        <div className="whatis-grid">
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={Resolution} alt="Resolution" className="whatis-image" />
              <p>Resolution</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={hightframe} alt="High Frame Rate" className="whatis-image" />
              <p>High frame rate</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={globalshutter} alt="Global Shutter" className="whatis-image" />
              <p>Global Shutter</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={nir} alt="NIR Sensitivity" className="whatis-image" />
              <p>NIR sensitivity</p>
            </div>
          </div>
          
        </div>

        <br />
        <h1 className="whatis-econ">e-con Cameras for In-cabin monitoring system</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
