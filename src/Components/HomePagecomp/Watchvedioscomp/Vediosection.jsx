import React, { useState } from 'react';
import { Carousel } from 'antd';
import './vediosec.css';
import surroundview from "../../../assets/homepage/surroundview-thump.jpg";
import deliveryrobot from "../../../assets/homepage/delivery-robot-thump.jpg";
import GMSLcamera from "../../../assets/homepage/forward-facing-thump.jpg";
import FsLightbox from 'fslightbox-react';

const VedioSection = () => {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const allCardData = [
    [
      { image: surroundview, title: "Surround View Camera for Industrial", videoUrl: "https://www.youtube.com/embed/VDIwwgNt6aE?autoplay=1" },
      { image: deliveryrobot, title: "Outdoor Delivery Robot", videoUrl: "https://www.youtube.com/embed/3f9qeT1YpgM?autoplay=1" },
      { image: GMSLcamera, title: "Surround View Camera for Industrial & Commercial Trucks", videoUrl: "https://www.youtube.com/embed/2C-kLV1yb8o?autoplay=1" }
    ],
    [
      { image: GMSLcamera, title: "Cameras for Bird Eye View", videoUrl: "https://www.youtube.com/embed/amoin1rADKY&t?autoplay=1" },
      { image: deliveryrobot, title: "Cameras for ADAS", videoUrl: "https://www.youtube.com/embed/JDiIqmI9GRU?autoplay=1" },
    ],
    
  ];

  const flatCardData = allCardData.flat();

  const openLightbox = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <div className="VedioSection-container">
      <h2 className="VedioSection-title">WATCH VIDEOS</h2>
      <div className='mainContainer'>
        <div className="VedioSection-desktopView">
          <Carousel autoplay> 
            {allCardData.map((cardSet, index) => (
              <div key={index} className="VedioSection-carouselSlide">
                <div className="VedioSection-carouselCards">
                  {cardSet.map((card, idx) => (
                    <div key={idx} className="VedioSection-card" onClick={() => openLightbox(card.videoUrl)}>
                      <img src={card.image} alt={card.title} className="VedioSection-cardImage" />
                      <h3 className="VedioSection-cardTitle">{card.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="VedioSection-mobileView">
          <div className="VedioSection-mobileCardGrid">
            <Carousel autoplay dots={false} arrows={true} slidesToShow={1} slidesToScroll={1}>
              {flatCardData.map((card, index) => (
                <div key={index} className="VedioSection-mobileCard" onClick={() => openLightbox(card.videoUrl)}>
                  <img src={card.image} alt={card.title} className="VedioSection-cardImage" />
                  <h3 className="VedioSection-cardTitle">{card.title}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <FsLightbox
          toggler={lightboxToggler}
          sources={[currentVideo]}
        />
      </div>
    </div>
  );
};

export default VedioSection;
