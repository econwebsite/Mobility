import React from "react";
import "./Industriescomp.css";
import agriculture from "../../../assets/homepage/agriculturalvehical.jpg";
import autonomousvehical from "../../../assets/homepage/autonomousvehical.jpg";
import mining from "../../../assets/homepage/miningvehical.jpg";
import deliveryrobot from "../../../assets/homepage/deleviryrobots.jpg";
import constructiovehical from "../../../assets/homepage/constructionvehical.jpg";
import dumptruck from "../../../assets/homepage/dumptruck.jpg";
import deliverytruck from "../../../assets/homepage/deliverytruck.jpg";
import pasanger from "../../../assets/homepage/passengervehicals.jpg";
import { Link } from "react-router-dom";


const items = [
  { id: 1, title: "Agricultural Vehicles", img: agriculture,link:"/industries/agricultural-vehicles" },
  { id: 2, title: "Mining Vehicles", img: mining, link:"/industries/mining-vehicles" },
  { id: 3, title: "Delivery Robots", img: deliveryrobot ,link:"/industries/delivery-robots"},
  { id: 4, title: "Construction Vehicles", img: constructiovehical,link:"/industries/construction-vehicles" },
  { id: 5, title: "Dump Truck", img: dumptruck, link:"/industries/dump-truck" },
  { id: 6, title: "Autonomous Vehicles", img: autonomousvehical,link:"/industries/autonomous-vehicles" },
  { id: 7, title: "Delivery Truck", img: deliverytruck,link:"/industries/delivery-truck" },
  { id: 8, title: "Passenger Vehicles", img: pasanger,link:"" },
];

function IndustriesComp() {
  return (
    <div className="industriescomp-container">
      <h4 className="industries-title">Industries</h4>
      <div className="industriescomp-grid">
        {items.map((item, index) => (
          <Link to={item.link}>
          <div key={item.id} className="industriescomp-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={item.img} alt={item.title} className="industriescomp-image" />
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
