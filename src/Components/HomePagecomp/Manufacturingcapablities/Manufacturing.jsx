import React from "react";
import { motion } from "framer-motion";
import "./Manufacturing.css"; 

import ruggedtesting from "../../../assets/homepage/ruggedtesting.jpg";
import lensfocusing from "../../../assets/homepage/lensfocusing.jpg";
import activealignemt from "../../../assets/homepage/activealignment.jpg";
import robustimg from "../../../assets/homepage/robostimg.jpg";
import ispturning from "../../../assets/homepage/ispturning.jpg";

const imageData = [
  { src: ispturning, title: "ISP Turning and Testing" },
  { src: robustimg, title: "Robust Design for Reliability" },
  { src: activealignemt, title: "Active Alignment Machines" },
  { src: lensfocusing, title: "Lens focusing and Gluing" },
  { src: ruggedtesting, title: "Rugged Testing for Harsh Environment " },
];

const Manufacturing = () => {
  return (
    <div className="manufacturing">
      <h2>MANUFACTURING CAPABILITY</h2>
      <p>
        At e-con Systems, we maintain industry-leading manufacturing processes
        to ensure our ADAS cameras meet the highest quality and reliability
        standards required for mobility applications. Our production facilities
        are equipped with advanced tools for lens alignment, lens gluing,
        perfect ISP tuning, and more.
      </p>

      <div className="image-container">
        {imageData.map((item, index) => (
          <motion.div
            key={index}
            className="image-box"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Manufacturing;
