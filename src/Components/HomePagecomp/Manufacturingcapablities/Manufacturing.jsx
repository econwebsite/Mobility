import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Manufacturing.css"; 

import ruggedtesting from "../../../assets/homepage/ruggedtesting.jpg";
import lensfocusing from "../../../assets/homepage/lensfocusing.jpg";
import activealignemt from "../../../assets/homepage/activealignment.jpg";
import robustimg from "../../../assets/homepage/robostimg.jpg";
import ispturning from "../../../assets/homepage/ispturning.jpg";

const imageData = [
  { src: ispturning, title: "ISP Turning and Testing", delay: "100" },
  { src: robustimg, title: "Robust Design for Reliability", delay: "300" },
  { src: activealignemt, title: "Active Alignment Machines", delay: "500" },
  { src: lensfocusing, title: "Lens focusing and Gluing", delay: "700" },
  { src: ruggedtesting, title: "Rugged Testing for Harsh Environment", delay: "900" },
];

const Manufacturing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="manufacturing">
      <div className="mainContainer">
      <h2 className="manufacturing-title">MANUFACTURING CAPABILITY</h2>
      <p className="manufacturing-description">
        At e-con Systems, we maintain industry-leading manufacturing processes
        to ensure our ADAS cameras meet the highest quality and reliability
        standards required for mobility applications. Our production facilities
        are equipped with advanced tools for lens alignment, lens gluing,
        perfect ISP tuning, and more.
      </p>

      <div className="image-container">
        {imageData.map((item, index) => (
          <div key={index} className="image-box" data-aos="fade-right" data-aos-delay={item.delay}>
            <div className="Manufacting-box">
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Manufacturing;
