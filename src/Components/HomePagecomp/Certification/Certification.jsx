import React from "react";
import "./Certification.css";
import certificated from "../../../assets/homepage/certificationstd.jpg";
import iso from "../../../assets/homepage/iso.png";
import iatf from "../../../assets/homepage/iatf.png";

const Certification = () => {
  return (
    <div className="certification">
      <div className="mainContainer">
        <h1>CERTIFICATIONS</h1>
        <div className="certification-container">
          <div className="certification-left">
            <div className="certification-title">
              <h2>ORGANIZATIONAL COMPLIANCE</h2>
            </div>
            <div className="certification-left-images">
              <div className="certification-image-container">
                <img src={iso} alt="ISO Certification" />
                <p className="certification-image-title">ISO 9001:2015</p>
              </div>
              <div className="certification-image-container">
                <img src={iatf} alt="IATF Certification" />
                <p className="certification-image-title">IATF 16949:2016</p>
              </div>
            </div>
          </div>

          <div className="certification-right">
            <div className="certification-title2">
              <h2>PRODUCT COMPLIANCE</h2>
            </div>
            <div className="certification-right-images">
              <img src={certificated} alt="IATF Certification" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
