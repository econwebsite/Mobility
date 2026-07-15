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
    { id: 1,img:surroundview, title: "서라운드 뷰 카메라", text: "360도 인식을 통해 향상된 안전 및 주차 보조 기능을 제공합니다.",link:"/surround-view-cameras",overlayimg:example1 },
    { id: 2,img:forwardfacing, title: "전방 카메라", text: "장거리 물체 감지 및 협각 가시성으로 차선 감지 및 충돌 방지 기능이 향상되었습니다.",link:"/forward-facing-cameras",overlayimg:example2 },
    { id: 3,img:rearview, title: "후방 카메라", text: "실시간 운전자 보조 기능은 사각지대를 제거하여 더 안전한 후진 및 주차를 보장합니다.",link:"/rear-view-cameras",overlayimg:example3 },
    { id: 4,img:drivermonitoring, title: "객실 내 모니터링 카메라", text: "피로나 산만함을 감지하여 안전성을 향상시키기 위한 실시간 운전자 행동 분석." ,overlayimg:example4},
    { id: 5,img:deliveryrobot, title: "자율 주행 제어 장치", text: "자율 주행 차량 기능에 대한 중앙 집중식 제어, 센서 데이터 통합 및 차량 운영 관리.",link:"/autonomous-driving-control-unit" ,overlayimg:adcu},
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
      <h2 className="OurProduct-heading">제품들</h2>
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
                  자세히 알아보기             
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
