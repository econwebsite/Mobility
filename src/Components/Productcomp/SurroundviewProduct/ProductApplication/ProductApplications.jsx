import React from 'react';
import './ProductApplication.css'; 
import view from "../../../../assets/Productpage/surroundview/360surroundview.jpg";
import blindspot from "../../../../assets/Productpage/surroundview/blindspot.jpg";

const ProductApplications = () => {
  return (
    <div className="ProductApplications-container">
      <h1 className="ProductApplications-title">APPLICATIONS</h1>
      <div className="mainContainer">
      <div className="ProductApplications-boxes">
        <div className="ProductApplications-box"  data-aos="fade-right" data-aos-duration="1800">
          <img src={blindspot} alt="Blind spot Monitoring" className="ProductApplications-image" />
          <h1 className="ProductApplications-boxTitle">Blind Spot Monitoring</h1>
        </div>
        
        <div className="ProductApplications-box"  data-aos="fade-left" data-aos-duration="1800">
          <img src={view} alt="360 Degree Surround View" className="ProductApplications-image" />
          <h1 className="ProductApplications-boxTitle">360 Degree Surround View</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductApplications;
