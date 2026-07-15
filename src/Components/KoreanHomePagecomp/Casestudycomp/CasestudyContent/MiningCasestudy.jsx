import React from "react";
import './miningcasestudy.css';
import caseimg from "../../../../assets/hubpage/casestudy/mining-banner.jpg";
import threesixty from "../../../../assets/hubpage/casestudy/360-icon.png";
import harshicon from "../../../../assets/hubpage/casestudy/harsh-environment-icon.png";
import inability from "../../../../assets/hubpage/casestudy/real-time-data-icon.png";
import integrity from "../../../../assets/hubpage/casestudy/integrity-complexities-icon.png";

import miningcard from "../../../../assets/hubpage/casestudy/benifits-card-img.jpg"
import Modelbutton from "../../../ButtonComp/Modelbutton";
import { Helmet } from 'react-helmet-async';

const MiningCasestudy = () => {
  return (
    <div className="future-case-container">
       <Helmet>
                <title>Rugged Multi-Camera Setup for Off-Road Mining Vehicles</title>
                <meta name='description' content='Discover how e-con Systems developed a rugged multi-camera solution for off-road mining vehicles, improving safety, uptime, and performance in harsh environments.' />
            </Helmet>
      <div className='mainContainer'>
        <div className="future-case-banner">
          <img src={caseimg} alt=" Developing a rugged, multi-camera setup for off-road mining vehicles" className="w-100" />
          <h1 className="future-case-heading">
          Developing a rugged, multi-camera setup for off-road mining vehicles
          </h1>
          <Modelbutton className="future-case-button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="case-study" docName="e-con_mining-vehicles-camera-solution" title="Case Study" />

        </div>

        <h2 className="future-case-sub-heading">Summary of the Solution</h2>
        <p className="future-case-paragraph">
        e-con Systems worked with a leading mining technology provider to develop a rugged, multi-camera surround view system for large off-road vehicles. We deployed high-resolution cameras integrated with a high-performance Sony sensor and came with features like 15-meter cable support, IP67-rated enclosures, customized ISP tuning and more.
        </p>

        <h2 className="future-case-sub-heading">Key Challenges Faced by the Client</h2>
        <div className="future-case-image-row">
          <div className="future-case-challenge">
            <img src={threesixty} alt="360° view to fully eliminate blind spots" className="future-case-challenge-image" />
            <p>Lack of a seamless 360° view to fully eliminate blind spots</p>
          </div>
          <div className="future-case-challenge">
            <img src={harshicon} alt="Harsh environmental exposure that affects imaging" className="future-case-challenge-image" />
            <p>Harsh environmental exposure that affects imaging performance</p>
          </div>
          <div className="future-case-challenge">
            <img src={inability} alt="Inability to provide alerts" className="future-case-challenge-image" />
            <p>Inability to provide alerts to operators based on real-time data</p>
          </div>
          <div className="future-case-challenge">
            <img src={integrity} alt="Challenge 3" className="future-case-challenge-image" />
            <p>Integration complexities with the systems of mining vehicles</p>
          </div>
        </div>

        <h2 className="future-case-benefits-title">Benefits of the Solution</h2>
        <div className="future-case-benefits-container">
          <img src={miningcard} alt="Benefits" className="future-case-benefits-image" />
          <div className="future-case-benefits-details">
            <ul>
              <li>Improved safety through real-time monitoring of blind spots</li>
              <li>Higher uptime due to fewer accidents and faster decision-making</li>
              <li>Durability in extreme weather and terrain with IP67 camera enclosures</li>
              <li>Faster deployment by avoiding changes to vehicle chassis or wiring</li>
              <Modelbutton className="ProductTabs-Button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="case-study" docName="e-con_mining-vehicles-camera-solution" title="Case Study"/>

            </ul>
          </div>
        </div>
        <br></br>

      
      </div>
    </div>
  );
};

export default MiningCasestudy;
