import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./releatedcam.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import studycam31 from "../../../assets/allcameras/studycam31.jpg"
import studycam34 from "../../../assets/allcameras/studycam34.jpg"
import nilecam27 from "../../../assets/allcameras/nilecam27.jpg"
import nilecam29 from "../../../assets/allcameras/nilecam29.jpg"
import routecam25 from "../../../assets/allcameras/routecam25.jpg"
import studycam29 from "../../../assets/allcameras/studycam29.png"
import studycam84 from "../../../assets/allcameras/studycam84.jpg"
import studycam88 from "../../../assets/allcameras/studycam88.png"


const RelatedCamerasCarousel = () => {
  const relatedCameras = [
    { id: 1, img: studycam31, title: "STRUDeCAM31" },
    { id: 2, img: studycam34, title: "STRUDeCAM34" },
    { id: 3, img: nilecam27, title: "NileCAM_CU27" },
    { id: 4, img: nilecam29, title: "NileCAM_CU29" },
    { id: 5, img: routecam25, title: "RouteCAM_CU25" },
    { id: 6, img: studycam29, title: "STRUDeCAM29" },
    { id: 7, img: studycam84, title: "STRUDeCAM84" },
    { id: 8, img: studycam88, title: "STRUDeCAM88" },

  ];

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
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, 
        settings: { slidesToShow: 1 },
      },
    ],
  };
    

  return (
    <div style={{backgroundColor:"#f1f2f2"}}>
    <div className="relatedcameras-container">
      <div className="mainContainer">
      <h2 className="relatedcamerasmain-title">Releated Cameras</h2>
      <Slider {...settings}>
        {relatedCameras.map((camera) => (
          <div key={camera.id} className="relatedcameras-card">
            <img
              src={camera.img}
              alt={camera.title}
              className="relatedcameras-img"
            />
            <h3 className="relatedcameras-title">{camera.title}</h3>
            <button className="relatedcameras-btn">Know More</button>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
  );
};

export default RelatedCamerasCarousel;
