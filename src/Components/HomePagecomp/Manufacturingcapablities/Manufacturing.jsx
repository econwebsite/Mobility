import React, { useState } from "react";
import "./Manufacturing.css";


import isptuning from "../../../assets/homepage/ispturning.jpg"
import robustdesign from "../../../assets/homepage/robostimg.jpg"
import activealignemt from "../../../assets/homepage/activealignment.jpg"

import randomvibration from "../../../assets/homepage/manufacturing-random-vibration.jpg"
import thermalshock from "../../../assets/homepage/manufacturing-thermal-shock.jpg"
import transittest from "../../../assets/homepage/manufacturing-transit-test.jpg"
import endurancetest from "../../../assets/homepage/manufacturing-endurance-test.jpg"



const tabData = {
  Design: [
    { src: isptuning, title: "ISP Tuning" },
    { src: robustdesign, title: "Robust Design for Reliability" },
    { src: activealignemt, title: "Active Alignment Machines" },

  ],
 
  Testing: [
    { src: randomvibration, title: "Random vibration Test" },
    { src: thermalshock, title: "Thermal shock Test" },
    { src: transittest, title: "Transit test (Inhouse lab) " },
    { src: endurancetest, title: "Endurance test" },
  ],
};

const Manufacturing = () => {
  const [selectedTab, setSelectedTab] = useState("Design");

  return (
    <div className="manufacturing-container">
      <h2 className="manufacturing-heading">MANUFACTURING & TESTING FACILITIES</h2>
      <p className="manufacturing-paragraph">
        At e-con Systems, we maintain industry-leading manufacturing processes to ensure our ADAS cameras meet the highest quality and reliability standards required for mobility applications.
      </p>

      <div className="manufacturing-content">
        <div className="manufacturing-tabs">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`manufacturing-tab-button ${selectedTab === tab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="manufacturing-tab-content" key={selectedTab}>
  {tabData[selectedTab].map((item, index) => (
  <div key={index} className="manufacturing-card">
  <div className="card-image-wrapper">
    <img src={item.src} alt={item.title} className="manufacturing-card-image" />
  </div>
  <h4 className="manufacturing-card-title">{item.title}</h4>
</div>

  ))}
</div>

      </div>
      <br></br>
    </div>
  );
};

export default Manufacturing;
