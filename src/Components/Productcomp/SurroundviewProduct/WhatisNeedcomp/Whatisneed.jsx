import React from 'react';
import Slider from "react-slick";
import "./Whatisneed.css";
import hdr from "../../../../assets/Productpage/surroundview/hdr.png";
import highsensitivity from "../../../../assets/Productpage/surroundview/nir-sensitivity.png"
// import longrange from "../../../../assets/Productpage/surroundview"
// import Compatibility from "../../../../assets/Productpage/surroundview"
import synchronization from "../../../../assets/Productpage/surroundview/synchronization.png"
// import highIsp from "../../../../assets/Productpage/surroundview"
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
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom left arrow
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
          Our surround view systems utilize multi-camera setups to provide a comprehensive 360-degree view of the vehicle’s surroundings. By synchronizing multiple cameras, these systems get a stitched, composite image that eliminates blind spots, thereby enhancing driver awareness and safety. This real-time bird's-eye view is crucial for parking assistance, obstacle detection, lane detection, traffic sign recognition, and maneuvering in tight spaces, all of which support the advanced functionalities of ADAS.          </p>
        </div>
        
        <h1 className='whatis-title'>What is needed?</h1>
        <br />
        
        {/* Slider Component with custom left and right arrows */}
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Slider {...settings}>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={hdr} alt="High Dynamic Range" className="whatis-image" />
                <p>High Dynamic Range</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={highsensitivity} alt="High Resolution" className="whatis-image" />
                <p>High Sensitivity</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={synchronization} alt="IP67 / IP69K Rating" className="whatis-image" />
                <p>Long range interface</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={hdr} alt="GMSL2 / GigEInterface" className="whatis-image" />
                <p>
                Compatible platforms</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={synchronization} alt="Low light Sensitivity" className="whatis-image" />
                <p>Camera synchronization</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={hdr} alt="NIR Sensitivity" className="whatis-image" />
                <p>High-performance ISP</p>
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
