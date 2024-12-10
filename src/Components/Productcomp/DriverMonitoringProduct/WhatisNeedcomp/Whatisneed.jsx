import React from 'react';
import Slider from "react-slick";
import "./Whatisneed.css";
// import Resolution from "../../../../assets/Productpage/drivermonitoring/"
import hightframe from "../../../../assets/Productpage/drivermonitoring/hight-framerate.png";
import globalshutt from "../../../../assets/Productpage/drivermonitoring/globalshutter.png"
import nir from "../../../../assets/Productpage/drivermonitoring/nir-sensitivity.png"

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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
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
            Our driver monitoring cameras are designed to enhance road safety by tracking driver behavior and alertness. With high frame rate and global shutter performance, along with excellent near-infrared (NIR) capabilities, these cameras are highly effective in detecting signs of drowsiness or distraction. This capability is critical for accident prevention and plays a key role in the functionality of advanced driver-assistance systems (ADAS). The integration of RGB-IR technology enables the cameras to capture clear images in both visible and infrared light without the need for mechanical filters. This feature ensures reliable performance both day and night and contributes to the camera’s extended lifespan.
          </p>
        </div>
        
        <h1 className='whatis-title'>What is needed?</h1>
        <br />
        
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Slider {...settings}>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={hightframe} alt="High Dynamic Range" className="whatis-image" />
                <p>Resolution</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={hightframe} alt="High Resolution" className="whatis-image" />
                <p>High frame rate</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={globalshutt} alt="IP67 / IP69K Rating" className="whatis-image" />
                <p>Global Shutter</p>
              </div>
            </div>
            <div className="whatis-box">
              <div className='alignment-whatisbox'>
                <img src={nir} alt="GMSL2 / GigEInterface" className="whatis-image" />
                <p>NIR sensitivity</p>
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
