import React from "react";
import "./OutProduct.css"; 
import { Link } from 'react-router-dom';
import surroundview from "../../../assets/homepage/surroundview.jpg"
import forwardfacing from "../../../assets/homepage/forwardfacing.jpg"
import rearview from "../../../assets/homepage/rearview.jpg"
import drivermonitoring from "../../../assets/homepage/drivermonitoring.jpg"
import { link } from "framer-motion/client";

const OurProduct = () => {
  const cardsData = [
    { id: 1,img:surroundview, title: "Surround View Cameras", text: "Our Surround view camera captures crisp clear images and videos essential for long-distance monitoring and precise traffic signs and signals recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying light conditions.",link:"/surroundview" },
    { id: 2,img:forwardfacing, title: "Forward-Facing Cameras", text: "Our forward-facing camera captures crisp clear images and videos essential for long-distance monitoring and precise traffic signs and signals recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying light conditions.",link:"/forwardfacing" },
    { id: 3,img:rearview, title: "Rear View Cameras", text: "Our Rear View Camera captures crisp clear images and videos essential for long-distance monitoring and precise traffic signs and signals recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying light conditions.",link:"rearview" },
    { id: 4,img:drivermonitoring, title: "In-cabin monitoring system", text: "Driver Monitoring Camera captures crisp clear images and videos essential for long-distance monitoring and precise traffic signs and signals recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying light conditions.",link:"/drivermonitoring" },
  ];

  return (
    <div className="OurProduct-wrapper">
      <h2 className="OurProduct-heading">Products</h2>
      <h2 className="OurProduct-subheading">Enhance vehicle vision. Process vision data in real-time!</h2>
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
