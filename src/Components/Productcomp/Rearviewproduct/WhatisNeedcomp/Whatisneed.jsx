import React from 'react';
import "./Whatisneed.css";
import hightframe from "../../../../assets/Productpage/drivermonitoring/hight-framerate.png";
import globalshutt from "../../../../assets/Productpage/drivermonitoring/globalshutter.png";
import nir from "../../../../assets/Productpage/drivermonitoring/nir-sensitivity.png";

const Whatisneed = () => {
  return (
    <div className="whatis-container">
      <div className="mainContainer">
        <div className="whatis-containerparagraph">
          <p className="whatis-standparagraphtext">
          Our rear view cameras provide wide-angle visibility for precise reversing in challenging environments. These industrial-grade cameras process video feeds from the vehicle's rear to offer real-time driver assistance, ensuring safer driving/parking by eliminating blind spots. With high-resolution imaging at various ranges and in challenging lighting conditions, these cameras are also required in the surround view system. 
          </p>
        </div>

        <h1 className="whatis-title">What is needed?</h1>
        <br />

        <div className="whatis-grid">
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={hightframe} alt="Resolution" className="whatis-image" />
              <p>HDR</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={hightframe} alt="High Frame Rate" className="whatis-image" />
              <p>Diverse lens options </p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={globalshutt} alt="Global Shutter" className="whatis-image" />
              <p>IP69K-rated Enclosure</p>
            </div>
          </div>
          
        </div>

        <br />
        <h1 className="whatis-econ">e-con Camera for Rear View</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
