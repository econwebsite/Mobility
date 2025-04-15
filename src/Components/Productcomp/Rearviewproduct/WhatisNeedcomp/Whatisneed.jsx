import React from 'react';
import { motion } from 'framer-motion';
import "./Whatisneed.css";

import hdr from "../../../../assets/Productpage/rearview/hdr.png";
import diverselens  from "../../../../assets/Productpage/rearview/diverse-lens.png";
import IP69K from "../../../../assets/Productpage/rearview/ip69k.png";


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
  { img: hdr, title: "HDR" },
  { img: diverselens, title: "Diverse lens options" },
  { img: IP69K, title: "IP69K-rated Enclosure" },

];

const Whatisneed = () => {
  return (
    <div className="whatneed-container">
      <div className="mainContainer">
        <div className="whatneed-containerparagraph">
          <p className="whatneed-standparagraphtext">
          Our rear view cameras provide wide-angle visibility for precise reversing in challenging environments. These industrial-grade cameras process video feeds from the vehicle's rear to offer real-time driver assistance, ensuring safer driving/parking by eliminating blind spots. With high-resolution imaging at various ranges and in challenging lighting conditions, these cameras are also required in the surround view system.          </p>
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
        <h1 className="whatneed-econ">e-con's Cameras for Rear View</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
