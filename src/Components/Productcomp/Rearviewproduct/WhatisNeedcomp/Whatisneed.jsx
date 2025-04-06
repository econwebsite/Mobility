import React from 'react';
import "./Whatisneed.css";
import hdr from "../../../../assets/Productpage/rearview/hdr.png";
import diverselens from "../../../../assets/Productpage/rearview/diverse-lens.png";
import ip69k from "../../../../assets/Productpage/rearview/ip69k.png";

const Whatisneed = () => {
  return (
    <div className="whatis-container">
      <div className="mainContainer">
        <div className="whatis-containerparagraph">
          <p className="whatis-standparagraphtext">
          Our rear view cameras provide wide-angle visibility for precise reversing in challenging environments. These industrial-grade cameras process video feeds from the vehicle's rear to offer real-time driver assistance, ensuring safer driving/parking by eliminating blind spots. With high-resolution imaging at various ranges and in challenging lighting conditions, these cameras are also required in the surround view system.          </p>
        </div>

        <h1 className="whatis-title">What is needed?</h1>
        <br />

        <div className="whatis-grid">
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={hdr} alt="hdr" className="whatis-image" />
              <p>HDR</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={diverselens} alt="lens" className="whatis-image" />
              <p>Diverse lens options </p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={ip69k} alt="Ip69k" className="whatis-image" />
              <p>IP69K-rated Enclosure</p>
            </div>
          </div>
          
        </div>

        <br />
        <h1 className="whatis-econ">e-con Cameras for Rear View</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
