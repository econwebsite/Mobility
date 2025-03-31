import React from 'react';
import './Casestudy.css';
import miningvehical from "../../../assets/homepage/mining-vehical-casestudy.jpg";
import deliveryrobort from "../../../assets/homepage/delivery-robot-casestudy.jpg";
import Modelbutton from "../../ButtonComp/Modelbutton";

const Casestudy = () => {
  const cardData = [
    { 
      image: miningvehical, 
      title: "How e-con Systems helped equip large mining vehicles with custom multi-camera solutions to monitor blind spots", 
      description: "e-con Systems helped a leading industrial automation provider in the mining sector to implement a custom multi-camera solution for large vehicles operating in high-risk environments.",
      to: "" 
    },
    { 
      image: deliveryrobort, 
      title: "Customized Autonomous Delivery Robot Solution for a Leading Automotive and Mobility Supplier", 
      description: "e-con Systems worked closely with a leading automotive and mobility supplier to develop a rugged, real-time vision solution for their autonomous delivery robots.",
      to: ""
    },
  ];

  return (
    <div className="casestudy-container">
      <h2 className="section-title">Case Studies</h2>
      <div className="case-study-grid">
        {cardData.map((card, index) => (
          <div className="case-card" key={index}>
            <div className="case-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="case-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Modelbutton className="case-button" text="Read Case Study" productName={card.title} backgroundColor="#344ea1" animationColor="#344ea1" type="download" hoverColor="#344ea1"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casestudy;