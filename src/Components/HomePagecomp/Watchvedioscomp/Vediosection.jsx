import React, { useState } from 'react';
import { Carousel } from 'antd';
import './vediosec.css';
import RGBir from "../../../assets/homepage/5mp-rgb-ir-global-shutter-thumbnail.jpg";
import DMSdemo from "../../../assets/homepage/driver-detection-demo-thumbnail.jpg";
import Pedestrian from "../../../assets/homepage/obstacle-pedestrian-thumbnail.jpg";
import LaneDeparture from "../../../assets/homepage/lane-keeping-assist-thumbnail.jpg";
import CollisionWarning from "../../../assets/homepage/forward-collision-thumbnail.jpg";
import surroundview from "../../../assets/homepage/surroundview-thumbnail.jpg";
import deliveryrobot from "../../../assets/homepage/delivery-robot-thumbnail.jpg";
import GMSLcamera from "../../../assets/homepage/forward-facing-thumbnail.jpg";
import usb from "../../../assets/homepage/usb-global-thumbnail.jpg"
import ip67 from "../../../assets/homepage/ip67-thumbnail.jpg"

import FsLightbox from 'fslightbox-react';

const VedioSection = () => {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const allCardData = [
    [
      { image: Pedestrian, title: "Pedestrian & Obstacle avoidance system", videoUrl: "https://www.youtube.com/embed/20ih9JyCuu4?autoplay=1" },
      { image: LaneDeparture, title: "Lane Departure Warning / Lane Keeping Assist System", videoUrl: "https://www.youtube.com/embed/iih7ia04JXA?autoplay=1" },
      { image: CollisionWarning, title: "Forward Collision Warning System", videoUrl: "https://www.youtube.com/embed/pLdavMYVnRs?autoplay=1" }
    ],
    [
      { image: surroundview, title: "Surround View Camera for Industrial", videoUrl: "https://www.youtube.com/embed/VDIwwgNt6aE?autoplay=1" },
      { image: deliveryrobot, title: "Outdoor Delivery Robot", videoUrl: "https://www.youtube.com/embed/3f9qeT1YpgM?autoplay=1" },
      { image: GMSLcamera, title: "Surround View Camera for Industrial & Commercial Trucks", videoUrl: "https://www.youtube.com/embed/2C-kLV1yb8o?autoplay=1" }
    ],
    [
      { image: usb, title: "USB global shutter camera for DMS", videoUrl: "https://www.youtube.com/embed/bR4bHUT1Kck?autoplay=1" },
      { image: ip67, title: "IP69K Camera Water & Dust proof demo ", videoUrl: "https://www.youtube.com/embed/xJtsouqanT0?autoplay=1" },
    ],
    [
      { image: RGBir, title: "5MP RGB-IR Global Shutter GMSL2 Camera for NVIDIA Jetson Platforms", videoUrl: "https://www.youtube.com/embed/mKsKxKD6hk4?autoplay=1" },
      { image: DMSdemo, title: "DMS & OMS Demo: Driver Detection, Drowsiness & Passenger Monitoring in Real Time", videoUrl: "https://www.youtube.com/embed/IsNixJsmOrU?autoplay=1" },
    ]
  ];

  const flatCardData = allCardData.flat();

  const openLightbox = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <div className="VedioSection-container">
      <h2 className="VedioSection-title">Watch Videos</h2>
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
