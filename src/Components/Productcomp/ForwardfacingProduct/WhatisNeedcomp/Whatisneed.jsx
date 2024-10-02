import React from 'react';
import Slider from "react-slick";
import "./Whatisneed.css";
import highdynamic from "../../../../assets/Productpage/hd-icon.png";
import hightresolution from "../../../../assets/Productpage/hd-icon.png";
import ip67 from "../../../../assets/Productpage/ip67-icon.png";
import gmsl from "../../../../assets/Productpage/gmsl-icon.png";
import lowlight from "../../../../assets/Productpage/lowlight-icon.png";
import nirsensitivity from "../../../../assets/Productpage/nir-icon.png";

// Custom Right Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow-right" onClick={onClick}>
      &gt; {/* This is the right arrow symbol */}
    </div>
  );
};

// Custom Left Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow-left" onClick={onClick}>
      &lt; {/* This is the left arrow symbol */}
    </div>
  );
};

const Whatisneed = () => {
  // Updated slider settings with custom left and right arrows, and no dots
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    cssEase: "linear",
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="whatis-container">
      <div className='mainContainer'>
        <div className="whatis-containerparagraph">
          <p className="whatis-standparagraphtext">
          Our forward-facing cameras capture crisp, clear images and videos essential for long-distance monitoring and precise traffic signs and signal recognition. Equipped with High Dynamic Range (HDR) technology, they deliver clear images even in varying lighting conditions, while LED Flicker Mitigation (LFM) ensures accurate image capture in environment with flickering artificial lights.          </p>
        </div>
        
        <h1 className='whatis-title'>What is needed?</h1>
        <br />
        
        {/* Slider Component with custom left and right arrows */}
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Slider {...settings}>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={highdynamic} alt="High Dynamic Range" className="whatis-image" />
                <p>High Dynamic Range</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={hightresolution} alt="High Resolution" className="whatis-image" />
                <p>High Resolution</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={ip67} alt="IP67 / IP69K Rating" className="whatis-image" />
                <p>IP67 / IP69K Rating</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={gmsl} alt="GMSL2 / GigEInterface" className="whatis-image" />
                <p>GMSL2 / GigEInterface</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={lowlight} alt="Low light Sensitivity" className="whatis-image" />
                <p>Low light Sensitivity</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={nirsensitivity} alt="NIR Sensitivity" className="whatis-image" />
                <p>NIR Sensitivity</p>
              </div>
            </div>
          </Slider>
        </div>
        <br />
        <h1 className='whatis-econ'>e-con Camera for ADAS</h1>
      </div>
    </div>
  );
}

export default Whatisneed;
