import React from 'react';
import './HubManufacturing.css';

const HubManufacturing = () => {
  return (
    <div className="hubmanuf-total">
      <div className="hub-manufacturing-box">
      <div className='mainContainer'>
        <h1 className="hub-title">Manufacturing Capability</h1>

        {/* <div className="hub-image-content">
          <img src="https://via.placeholder.com/300x120" alt="Manufacturing Capability" className="hub-image" />
        </div> */}

        <div className="hub-text-content">
          <p>
            At e-con Systems, we maintain industry-leading manufacturing processes to ensure our ADAS cameras meet the highest quality and reliability standards required for mobility applications. Our production facilities are equipped with advanced tools for lens alignment, lens gluing, perfect ISP tuning, and more.
          </p>
          <ul>
            <li><strong>ISP Tuning and Testing:</strong>  <img src="https://via.placeholder.com/400x260" alt="ISP Tuning" />
            We utilize advanced ISP tuning tools such as HDR test setups, color checkers for color accuracy, and dark rooms with adjustable lighting for perfecting image quality under various lighting conditions.</li>
            <li><strong>Lens Focusing and Gluing:</strong>  <img src="https://via.placeholder.com/400x260" alt="ISP Tuning" />
            The assembly process involves sensor cleaning, precision lens fixing, and focus alignment using high-end software, ensuring each camera performs optimally in demanding environments. We use high-grade lens holder materials and specialized gluing materials to ensure stability and durability.</li>
            <li><strong>Active Alignment Machines:</strong>  <img src="https://via.placeholder.com/400x260" alt="ISP Tuning" />
            The active alignment process implemented by e-con Systems ensures that each camera module achieves precise alignment, ultimately enhancing the imaging experience and satisfying the demands of various applications.</li>
            <li><strong>Robust Design for Reliability:</strong> <img src="https://via.placeholder.com/400x260" alt="ISP Tuning" />
             Our ADAS cameras are engineered for long-term reliability, incorporating durable cabling, superior electrical design, and thorough validation processes to ensure GMSL link margin stability.</li>
            <li><strong>Rugged Testing for Harsh Environment:</strong>  <img src="https://via.placeholder.com/400x260" alt="ISP Tuning" />
            Our cameras undergo rigorous vibration and shock testing to ensure durability in tough off-road and industrial conditions. Designed to meet IP69K standards, they are resistant to dust, water, extreme temperatures, and more.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HubManufacturing;
