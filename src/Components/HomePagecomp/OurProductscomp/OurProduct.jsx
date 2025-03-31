import React from "react";
import "./OutProduct.css"; 
import { Link } from 'react-router-dom';
import surroundview from "../../../assets/homepage/surroundview.jpg"
import forwardfacing from "../../../assets/homepage/forwardfacing.jpg"
import rearview from "../../../assets/homepage/rearview.jpg"
import drivermonitoring from "../../../assets/homepage/drivermonitoring.jpg"

const OurProduct = () => {
  const cardsData = [
    { id: 1,img:surroundview, title: "Surround View Cameras", text: "360-degree perception for enhanced safety and parking assistance.",link:"/surround-view-camera" },
    { id: 2,img:forwardfacing, title: "Forward-Facing Cameras", text: "Long-range object detection and narrow-angle visibility for enhanced lane detection and collision avoidance.",link:"/forward-facing-camera" },
    { id: 3,img:rearview, title: "Rear View Cameras", text: "Real-time driver assistance eliminates blind spots, ensuring safer reversing and parking.",link:"rearview" },
    { id: 4,img:drivermonitoring, title: "In-cabin monitoring system", text: "Real-time driver behavior analysis to detect fatigue or distraction for improved safety.",link:"/driver-monitoring-camera" },
  ];

  return (
    <div className="OurProduct-wrapper">
      <h2 className="OurProduct-heading">Products</h2>
      {/* <h2 className="OurProduct-subheading">Enhance vehicle vision. Process vision data in real-time!</h2> */}
      <div className="OurProduct-container">
        {cardsData.map((card) => (
          <div className="OurProduct" key={card.id}>
            <img src={card.img} className="OurProduct-placeholder"></img>
            <div className="ourproduct-back">{card.title}</div>
            <div className="OurProduct-overlay">
              <h3 className="OurProduct-title">{card.title}</h3>
              <p className="OurProduct-text">{card.text}</p>
             <Link   to={card.link} style={{ textDecoration: "none"}}> <button className="OurProduct-button">
              Know More               </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
