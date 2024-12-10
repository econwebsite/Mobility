import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Manufacturing.css'; // For the styling
import manufact from "../../../assets/homepage/manufacturing-img.png";
import AnimationButton from "../../ButtonComp/AnimationButton"
const Manufacturing = () => {
  return (
    <div className="manufacturing-container">
      <h1 className="manufacturing-title">MANUFACTURING CAPABILITY</h1>
      <div className='mainContainer'>
        <div className="manufacturing-content">
          <div className="manufacturing-left-column" data-aos="fade-right" data-aos-duration="1800">
            <p>
              At e-con Systems, we maintain industry-leading manufacturing processes to ensure our ADAS cameras meet the highest quality and reliability standards required for mobility applications. Our production facilities are equipped with advanced tools for lens alignment, lens gluing, perfect ISP tuning and more.
            </p>
            <ul className="manufacturing-list">
            <li><i className="fas fa-check" style={{ color: '#00aeef', marginRight: '10px', fontSize: '20px' }}></i>ISP Tuning and Testing</li>
            <li><i className="fas fa-check" style={{ color: '#00aeef', marginRight: '10px', fontSize: '20px' }}></i>Lens Focusing and Gluing</li>
            <li><i className="fas fa-check" style={{ color: '#00aeef', marginRight: '10px', fontSize: '20px' }}></i>Active Alignment Machines</li>
            <li><i className="fas fa-check" style={{ color: '#00aeef', marginRight: '10px', fontSize: '20px' }}></i>Robust Design for Reliability</li>
            <li><i className="fas fa-check" style={{ color: '#00aeef', marginRight: '10px', fontSize: '20px' }}></i>Rugged Testing for Harsh Environment</li>
            </ul>
            <br></br>
            <div  className='manuf-knowbtn'>
            <AnimationButton text="Know more"  backgroundColor="#3443a1" to="/HubManufacturing" animationColor="#69ba2f"/>
            </div>
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
