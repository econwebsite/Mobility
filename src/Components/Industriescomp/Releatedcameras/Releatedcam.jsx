import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "./releatedcam.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RelatedCamerasCarousel = ({ cameras }) => {
  const [filteredCameras, setFilteredCameras] = useState([]);

  useEffect(() => {
    setFilteredCameras(cameras);
  }, [cameras]);

  const CustomPrevArrow = (props) => (
    <button {...props} className="relatedcameras-arrow relatedcameras-prev">
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="relatedcameras-arrow relatedcameras-next">
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relatedcameras-wrapper">
      {/* <h2 className="relatedcamerasmain-title">Related Cameras</h2> */}
      <div className="relatedcameras-container">
        <Slider {...settings}>
          {filteredCameras.length > 0 ? (
            filteredCameras.map((camera) => (
              <div key={camera.id} className="relatedcameras-card">
                <img src={camera.img} alt={camera.title} className="relatedcameras-img" />
                <h3 className="relatedcameras-title">{camera.title}</h3>
                <button className="relatedcameras-btn">Know More</button>
              </div>
            ))
          ) : (
            <p>No related cameras available.</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedCamerasCarousel;