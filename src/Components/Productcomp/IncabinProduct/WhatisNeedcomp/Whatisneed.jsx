import React from 'react';
import { motion } from 'framer-motion';
import "./Whatisneed.css";

import resolution from "../../../../assets/Productpage/drivermonitoring/resolution.png";
import highframerate from "../../../../assets/Productpage/drivermonitoring/highframe-rate.png";
import globalshutter from "../../../../assets/Productpage/drivermonitoring/globalshutter.png";
import nir from "../../../../assets/Productpage/drivermonitoring/nir-sensivity.png";



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
  { img: resolution, title: "Resolution" },
  { img: highframerate, title: "High frame rate" },
  { img: globalshutter, title: "Global Shutter" },
  { img: nir, title: "NIR sensitivity" },
];

const Whatisneed = () => {
  return (
    <div className="whatneed-container">
      <div className="mainContainer">
        <div className="whatneed-containerparagraph">
          <p className="whatneed-standparagraphtext">
          In-cabin monitoring cameras are designed to enhance road safety by tracking driver behavior and alertness. With high frame rate and global shutter performance, along with excellent near-infrared (NIR) capabilities, these industrial-grade cameras are highly effective in detecting signs of drowsiness or distraction. This capability is critical for accident prevention and plays a key role in the functionality of advanced driver-assistance systems (ADAS). The integration of RGB-IR technology enables the cameras to capture clear images in both visible and infrared light without the need for mechanical filters. This feature ensures reliable performance both day and night and contributes to the camera’s extended lifespan.          </p>
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
        <h1 className="whatneed-econ">e-con's Cameras for In-Cabin Monitoring Cameras</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
