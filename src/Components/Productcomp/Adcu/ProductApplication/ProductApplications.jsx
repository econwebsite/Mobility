import React from 'react';
import './ProductApplication.css'; 
import deliveryRobots from "../../../../assets/Productpage/adcu/delivery-robots.jpg";

import forklift from '../../../../assets/Productpage/adcu/forklift.jpg';
import warhouseRobot from "../../../../assets/Productpage/adcu/warehouse-robot.jpg"

const ProductApplications = () => {
  return (
    <div className="ProductApplications-container">
      <h1 className="ProductApplications-title">Application</h1>
      <div className="mainContainer">
      <div className="ProductApplications-boxes">
        <div className="ProductApplications-box"  data-aos="fade-right" data-aos-duration="1800">
          <img src={deliveryRobots} alt="Delivery Robots" className="ProductApplications-image" />
          <h2 className="ProductApplications-boxTitle">Delivery Robots</h2>
        </div>
        
         <div className="ProductApplications-box"  data-aos="fade-left" data-aos-duration="1800">
          <img src={forklift} alt="360 Degree Surround View" className="ProductApplications-image" />
          <h2 className="ProductApplications-boxTitle">Forklift</h2>
        </div> 
        <div className="ProductApplications-box"  data-aos="fade-left" data-aos-duration="1800">
          <img src={warhouseRobot} alt="360 Degree Surround View" className="ProductApplications-image" />
          <h2 className="ProductApplications-boxTitle">Warehouse Robots</h2>
        </div> 
      </div>
      </div>
    </div>
  );
};

export default ProductApplications;
