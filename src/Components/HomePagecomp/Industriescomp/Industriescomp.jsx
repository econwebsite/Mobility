import React from "react";
import "./Industriescomp.css";
import agriculture from "../../../assets/homepage/agriculturalvehical.jpg";
import autonomousvehical from "../../../assets/homepage/autonomousvehical.jpg";
import mining from "../../../assets/homepage/miningvehical.jpg";
import deliveryrobot from "../../../assets/homepage/deleviryrobots.jpg";
import constructiovehical from "../../../assets/homepage/constructionvehical.jpg";
import garbagetruck from "../../../assets/homepage/garbagetruck.jpg";
import deliverytruck from "../../../assets/homepage/deliverytruck.jpg";
import lawn from "../../../assets/homepage/lawn-mower-vehicles.jpg";
import { Link } from "react-router-dom";


const items = [
  { id: 1, title: "Agricultural Vehicles", img: agriculture,link:"/industries/agricultural-vehicle-camera-systems" },
  { id: 2, title: "Mining Vehicles", img: mining, link:"/industries/mining-vehicle-camera-systems" },
  { id: 3, title: "Delivery Robots", img: deliveryrobot ,link:"/industries/autonomous-delivery-robot-cameras"},
  { id: 4, title: "Construction Vehicles", img: constructiovehical,link:"/industries/rugged-cameras-for-construction-vehicles" },
  { id: 5, title: "Garbage Trucks", img: garbagetruck, link:"/industries/garbage-truck-vision-systems" },
  { id: 6, title: "Autonomous Vehicles", img: autonomousvehical,link:"/industries/autonomous-vehicle-vision-systems" },
  { id: 7, title: "Delivery Trucks", img: deliverytruck,link:"/industries/delivery-truck-vision-systems" },
  { id: 8, title: "Lawn Mowers", img: lawn,link:"/industries/autonomous-lawn-mower-vision-systems" },
];

function IndustriesComp() {
  return (
    <div className="industriescomp-container">
      <h4 className="industries-title">Industries</h4>
      <div className="industriescomp-grid">
       {items.map((item, index) => (
  <Link
    key={item.id || index}
    to={item.link}
  >
    <div
      className="industriescomp-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="industriescomp-image"
      />
      <div className="industriescomp-overlay">
        <h3 className="industriescomp-title">{item.title}</h3>
      </div>
    </div>
  </Link>
))}

      </div>
    </div>
  );
}

export default IndustriesComp;
