import React, { useState } from "react";
import "./Manufacturing.css";

import ruggedtesting from "../../../assets/homepage/ruggedtesting.jpg";
import lensfocusing from "../../../assets/homepage/lensfocusing.jpg";
import activealignment from "../../../assets/homepage/activealignment.jpg";
import robustimg from "../../../assets/homepage/robostimg.jpg";
import ispturning from "../../../assets/homepage/ispturning.jpg";

const tabData = {
  Design: [
    { src: ispturning, title: "ISP Tuning" },
    { src: robustimg, title: "Robust Design for Reliability" },
    { src: activealignment, title: "Active Alignment Machines" },
    { src: activealignment, title: "Active Alignment Machines" },

  ],
  Manufacturing: [
    { src: lensfocusing, title: "Lens Focusing & Gluing" },
    { src: ruggedtesting, title: "Rugged Testing" },
  ],
  Testing: [
    { src: ispturning, title: "Optimal Layout Planning" },
    { src: activealignment, title: "Advanced Layout Designs" },
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

        <div className="manufacturing-tab-content">
          {tabData[selectedTab].map((item, index) => (
            <div key={index} className="manufacturing-card">
              <img src={item.src} alt={item.title} className="manufacturing-card-image" />
              <h4 className="manufacturing-card-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
