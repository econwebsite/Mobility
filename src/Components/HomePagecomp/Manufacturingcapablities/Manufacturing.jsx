import React from 'react';
import './Manufacturing.css'; // For the styling
import manufact from "../../../assets/homepage/manufacturing-img.png";

const Manufacturing = () => {
  return (
    <div className="manufacturing-container">
      <h1 className="manufacturing-title">MANUFACTURING CAPABILITY</h1>
      <div className='mainContainer'>
      <div className="manufacturing-content">
        <div className="manufacturing-left-column" data-aos="fade-right" data-aos-duration="1800">
          <p>
          The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids. Specifically, the IP69K rating is one of the highest levels of protection within this system. This rating is denoted by the letters' IP', followed by two numbers. The first number indicates the degree of protection against solid particles, while the second rep- resents protection against liquids.
          </p>
          <br></br>
          <p>
          In this blog, you'll discover what capabilities are required to achieve the IP69K rating and its benefits for camera solutions that power autonomous mobility systems.
          </p>
        </div>
        <div className="manufacturing-right-column" data-aos="fade-left" data-aos-duration="1800">
          <img
            src={manufact} 
            alt="Manufacturing"
            className="manufacturing-image"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
