import React from "react";
import "./Manufacturing.css";

const Manufacturing = () => {
  const facilities = [
    "Imaging Lab",
    "Mechanical Design Lab",
    // "Vibration Shaker",
    // "Environmental Chamber",
    "Combined Vibration & Environmental Chamber",
    "EMC Chamber",
    "ESD Lab",
    "Reliability Lab"
  ];

  return (
    <section className="manufacturing-comp-section">
      <div className="manufacturing-comp-glow"></div>

      <div className="manufacturing-comp-wrapper">
        <h2 className="manufacturing-comp-heading">
          <span className="manufacturing-comp-heading-gradient">Manufacturing & Testing Facilities</span>
        </h2>

        <p className="manufacturing-comp-description">
          Industry-leading processes ensuring the highest quality standards for ADAS camera production and testing.
        </p>

        <div className="manufacturing-comp-grid">
          {facilities.map((facility, index) => (
            <div
              className="manufacturing-comp-card"
              key={index}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="manufacturing-comp-card-inner">
                <div className="manufacturing-comp-hover-gradient"></div>
                <div className="manufacturing-comp-content">
                  <h3 className="manufacturing-comp-title">{facility}</h3>
                  <div className="manufacturing-comp-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
