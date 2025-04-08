import React from 'react';
import { motion } from 'framer-motion';
import "./Whatisneed.css";

import hdr from "../../../../assets/Productpage/forwardfacing/hdr.png";
import lfm from "../../../../assets/Productpage/forwardfacing/lfm.png";
import highresolution from "../../../../assets/Productpage/forwardfacing/high-resolution.png";
import customizable from "../../../../assets/Productpage/forwardfacing/customizable-lens.png";


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
  { img: lfm, title: "LFM" },
  { img: highresolution, title: "High resolution" },
  { img: customizable, title: "customizable lens" },


];

const Whatisneed = () => {
  return (
    <div className="whatneed-container">
      <div className="mainContainer">
        <div className="whatneed-containerparagraph">
          <p className="whatneed-standparagraphtext">
            Our forward-facing cameras capture crisp, clear images and videos essential for long-distance monitoring and precise traffic signs and signal recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying lighting conditions, while LED Flicker Mitigation (LFM) ensures accurate image capture in environments with flickering artificial lights.
          </p>
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
        <h1 className="whatneed-econ">e-con Cameras for Forward Facing</h1>
      </div>
    </div>
  );
};

export default Whatisneed;
