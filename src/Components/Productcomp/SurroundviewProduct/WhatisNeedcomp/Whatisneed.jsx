import React from 'react';
import { motion } from 'framer-motion';
import "./Whatisneed.css";

import highdynamic from "../../../../assets/Productpage/surroundview/hdr.png";
import highsensitivity from "../../../../assets/Productpage/surroundview/high-sensitivity.png";
import largeinterface from "../../../../assets/Productpage/surroundview/long-range-interface.png";
import compatableplatform from "../../../../assets/Productpage/surroundview/compatablity-platform.png";
import camerasync from "../../../../assets/Productpage/surroundview/camera-synchronization.png";
import highisp from "../../../../assets/Productpage/surroundview/high-performance-isp.png";


const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const cardData = [
  { img: highdynamic, title: "High Dynamic Range" },
  { img: highsensitivity, title: "High sensitivity" },
  { img: largeinterface, title: "Long range interface" },
  { img: compatableplatform, title: "Compatibility platforms" },
  { img: camerasync, title: "Camera synchronization" },
  { img: highisp, title: "High performance ISP" },

];

const Whatisneed = () => {
  return (
    <div className="whatneed-container">
      <div className="mainContainer">
        <div className="whatneed-containerparagraph">
          <p className="whatneed-standparagraphtext">
          Our surround view systems utilize multi-camera setups to provide a comprehensive 360-degree view of the vehicle’s surroundings. By synchronizing multiple cameras, these systems get a stitched, composite image that eliminates blind spots, thereby enhancing driver awareness and safety. This real-time bird's-eye view is crucial for parking assistance, obstacle detection, lane detection, traffic sign recognition, and maneuvering in tight spaces, all of which support the advanced functionalities of ADAS.          </p>
        </div>

        <h1 className="whatneed-title">What is needed?</h1>
        <br />

        <div className="whatneed-grid">
  {cardData.slice(0, 4).map((item, index) => (
    <motion.div
      className="whatneed-box"
      key={index}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="alignment-whatneedbox">
        <img src={item.img} alt={item.title} className="whatneed-image" />
        <p>{item.title}</p>
      </div>
    </motion.div>
  ))}
</div>

<div className="whatneed-grid" style={{ justifyContent: 'center' }}>
  {cardData.slice(4).map((item, index) => (
    <motion.div
      className="whatneed-box"
      key={index + 4}
      custom={index + 4}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="alignment-whatneedbox">
        <img src={item.img} alt={item.title} className="whatneed-image" />
        <p>{item.title}</p>
      </div>
    </motion.div>
  ))}
</div>


        <br />
        <h1 className="whatneed-econ">e-con Cameras for Surround View</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
