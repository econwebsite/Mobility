import React, { useState, useEffect } from "react";
import "./OutProduct.css"; 
import { Link } from 'react-router-dom';
import surroundview from "../../../assets/homepage/surroundview.jpg"
import forwardfacing from "../../../assets/homepage/forwardfacing.jpg"
import rearview from "../../../assets/homepage/rearview.jpg"
import drivermonitoring from "../../../assets/homepage/drivermonitoring.jpg"
import deliveryrobot from "../../../assets/homepage/deliveryrobot.jpg"
import example1 from "../../../assets/Productpage/ourproduct1.png"
import example2 from "../../../assets/Productpage/ourproduct2.png"
import example3 from "../../../assets/Productpage/ourproduct3.png"
import example4 from "../../../assets/Productpage/ourproduct4.png"
import adcu from "../../../assets/Productpage/adcu.png"


const OurProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldTransition, setShouldTransition] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);

  const cardsData = [
    { id: 1,img:surroundview, title: "Surround View Cameras", text: "360-degree perception for enhanced safety and parking assistance.",link:"/surround-view-cameras",overlayimg:example1 },
    { id: 2,img:forwardfacing, title: "Forward-Facing Cameras", text: "Long-range object detection and narrow-angle visibility for enhanced lane detection and collision avoidance.",link:"/forward-facing-cameras",overlayimg:example2 },
    { id: 3,img:rearview, title: "Rear View Cameras", text: "Real-time driver assistance eliminates blind spots, ensuring safer reversing and parking.",link:"/rear-view-cameras",overlayimg:example3 },
    { id: 4,img:drivermonitoring, title: "In-Cabin Monitoring Cameras", text: "Real-time driver behavior analysis to detect fatigue or distraction for improved safety.",link:"/driver-monitoring-cameras" ,overlayimg:example4},
    { id: 5,img:deliveryrobot, title: "Autonomous Driving Control Unit", text: "Centralized control for autonomous vehicle functions, integrating sensor data and managing vehicle operations.",link:"/autonomous-driving-control-unit" ,overlayimg:adcu},
  ];

  const totalCards = cardsData.length;

  // Handle responsive item count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When we reach the end, reset without transition
    if (currentIndex === totalCards) {
      const timer = setTimeout(() => {
        setShouldTransition(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShouldTransition(true);
    }
  }, [currentIndex, totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Create extended array for seamless looping
  const extendedCards = [
    ...cardsData,
    ...cardsData.slice(0, itemsPerView),
  ];

  // Calculate translate percentage based on items per view
  const translatePercentage = (100 / itemsPerView);
  const translateValue = -(currentIndex * translatePercentage);

  return (
    <div className="OurProduct-wrapper">
      <h2 className="OurProduct-heading">Products</h2>
      <div className="OurProduct-container">
        <div
          className="OurProduct-track"
          style={{ 
            transform: `translateX(${translateValue}%)`,
            transition: shouldTransition ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedCards.map((card, index) => (
            <div className="OurProduct" key={`${card.id}-${index}`}>
              <img src={card.img} className="OurProduct-placeholder" alt={card.title}></img>
              <div className="ourproduct-back">{card.title}</div>
              <div className="OurProduct-overlay">
                <Link style={{textDecoration:"none"}} to={card.link}>
                <img className="Our-product-overimg" src={card.overlayimg}></img>
                <h3 className="OurProduct-title">{card.title}</h3>
                <p className="OurProduct-text">{card.text}</p>
                </Link>
               <Link to={card.link} style={{ textDecoration: "none"}}> 
                <button className="OurProduct-button">
                  Know More              
                </button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="slider-nav-container">
        <button className="slider-nav-btn slider-prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="slider-nav-btn slider-next" onClick={handleNext}>
          &#10095;
        </button>
      </div> */}
    </div>
  );
};

export default OurProduct;
