import React from 'react';
import "./Whatisneed.css";

import hdr from "../../../../assets/Productpage/forwardfacing/hdr.png"
import Lfm from "../../../../assets/Productpage/forwardfacing/lfm.png"
import highresolution from "../../../../assets/Productpage/forwardfacing/high-resolution.png"
import customlence from "../../../../assets/Productpage/forwardfacing/customizable-lens.png"

const Whatisneed = () => {
  return (
    <div className="whatis-container">
      <div className="mainContainer">
        <div className="whatis-containerparagraph">
          <p className="whatis-standparagraphtext">
          Our forward-facing cameras capture crisp, clear images and videos essential for long-distance monitoring and precise traffic signs and signal recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying lighting conditions, while LED Flicker Mitigation (LFM) ensures accurate image capture in environment with flickering artificial lights.</p>
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
              <img src={Lfm} alt="High Frame Rate" className="whatis-image" />
              <p>LFM</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={highresolution} alt="highresolution" className="whatis-image" />
              <p>High resolution</p>
            </div>
          </div>
          <div className="whatis-box">
            <div className="alignment-whatisbox">
              <img src={customlence} alt="custom lens" className="whatis-image" />
              <p>customizable lens</p>
            </div>
          </div>
          
        </div>

        <br />
        <h1 className="whatis-econ">e-con Cameras for Forward Facing</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
