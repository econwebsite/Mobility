import React from "react";
import "./Certification.css";
import certificated from "../../../assets/homepage/certificationstd.png";
import iso from "../../../assets/homepage/iso.png";
import iatf from "../../../assets/homepage/iatf.png";

const Certification = () => {
  return (
    <div className="certification">
      <div className="mainContainer">
        <h1>CERTIFICATION</h1>
        <div className="certification-container">
          <div className="certification-left">
            <div className="Certification-title">
              <h2>STANDARDS & COMPLIANCE</h2>
            </div>
            <div className="certification-left-images">
              <div>
                <img src={certificated} alt="img3" />
              </div>
            </div>
          </div>

          <div className="certification-right">
            <div className="Certification-title2">
              <h2>ORGANIZATIONAL COMPLIANCE</h2>
            </div>
            <div className="certification-right-images">
              <div className="image-container">
                <img src={iso} alt="ISO Certification" />
                <p className="image-title">ISO 9001:2015</p>
              </div>
              <div className="image-container">
                <img src={iatf} alt="IATF Certification" />
                <p className="image-title">IATF 16949:2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;

