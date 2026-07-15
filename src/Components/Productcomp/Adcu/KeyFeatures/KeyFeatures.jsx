import React from "react";
import "./KeyFeatures.css";
import { Description } from "@mui/icons-material";

const KeyFeatures = () => {
  const facilities = [
    {
        title:"Accelerated Time-to-Market",
        description:"Pre-validated camera and ADCU solutions reduce development cycles."
    },
    {
        title:"Automotive-Grade Reliability",
        description:"ISO 26262 safety compliance, IP66 ruggedness, and wide temperature tolerance."
    },
    {
        title:"Flexible Sensor Ecosystem",
        description:"Seamless integration with multiple cameras, radars, LiDARs, and so on."
    },
    {
        title:"Future-Ready Autonomy",
        description:"OTA update support, cyber-security compliance, and compatibility with next-gen ADAS stacks."
    },
    {
        title:"Lower Total Cost of Ownership (TCO)",
        description:"Optimized design reduces re-engineering costs across platforms and vehicle models."
    }
    
  ];

  return (
    <section className="keyfeatures-comp-section">
      <div className="keyfeatures-comp-glow"></div>

      <div className="keyfeatures-comp-wrapper">
        <h2 className="keyfeatures-comp-heading">
          <span className="keyfeatures-comp-heading-gradient">Key Benefits</span>
        </h2>

        {/* <p className="keyfeatures-comp-description">
          Industry-leading processes ensuring the highest quality standards for ADAS camera production and testing.
        </p> */}

        <div className="keyfeatures-comp-grid">
          {facilities.map((item, index) => (
            <div
              className="keyfeatures-comp-card"
              key={index}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="keyfeatures-comp-card-inner">
                <div className="keyfeatures-comp-hover-gradient"></div>
                <div className="keyfeatures-comp-content">
                  <h3 className="keyfeatures-comp-title">{item.title}</h3>
                  <p className="keyfeaturesPara">{item.description}</p>
                  <div className="keyfeatures-comp-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
