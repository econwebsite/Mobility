import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./Industriescomp.css"; 
import agriculture from "../../../assets/homepage/agriculturalvehical.jpg"
import autonomousvehical from "../../../assets/homepage/autonomousvehical.jpg"
import mining from "../../../assets/homepage/miningvehical.jpg"
import deliveryrobot from "../../../assets/homepage/deleviryrobots.jpg"
import constructiovehical from "../../../assets/homepage/constructionvehical.jpg"
import dumptruck from "../../../assets/homepage/dumptruck.jpg"


const items = [
  { id: 1, title: "Agricultural Vehicles", img: agriculture },
  { id: 2, title: "Mining Vehicles", img: mining},
  { id: 3, title: "Delivery Robots", img:deliveryrobot },
  { id: 4, title: "Constructrion Vehicles ", img:constructiovehical },
  { id: 5, title: "Dumptruck", img: dumptruck },
  { id: 6, title: "Autonomous Vehicles ", img: autonomousvehical },
];

function IndustriesComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const titleSliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: window.innerWidth < 768 ? 1 : 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    afterChange: (current) => titleSliderRef.current?.slickGoTo(current)
  };
  

  const titleSettings = {
    ...settings,
    slidesToShow: window.innerWidth < 500 ? 1 : 5, 
    ref: titleSliderRef
  };
  

  const goToSlide = (index) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
    titleSliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="industriescomp-container">

      <h4 className="industries-title">Industries</h4>
     <div className="industriescomp-slider">
  <Slider ref={sliderRef} {...settings}>
    {items.map((item, index) => (
      <div key={item.id} className="industriescomp-slide" onClick={() => goToSlide(index)}>
        <div className={`industriescomp-card ${index === activeIndex ? "active" : ""}`}>
          <img src={item.img} alt={item.title} className="industriescomp-image" />
          <div className="industri-back">{item.title}</div>
        </div>
      </div>
    ))}
  </Slider>
</div>


      <div className="industriescomp-title-slider">
        <Slider {...titleSettings}>
          {items.map((item, index) => (
            <div key={item.id} className="industriescomp-title-slide" onClick={() => goToSlide(index)}>
              <span className={`industriescomp-title ${index === activeIndex ? "active" : ""}`}>
                {item.title}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default IndustriesComp;
