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
      { image: Pedestrian, title: "보행자 및 장애물 회피 시스템", videoUrl: "https://www.youtube.com/embed/20ih9JyCuu4?autoplay=1" },
      { image: LaneDeparture, title: "차선 이탈 경고 / 차선 유지 보조 시스템", videoUrl: "https://www.youtube.com/embed/iih7ia04JXA?autoplay=1" },
      { image: CollisionWarning, title: "전방 충돌 경고 시스템", videoUrl: "https://www.youtube.com/embed/pLdavMYVnRs?autoplay=1" }
    ],
    [
      { image: surroundview, title: "산업용 서라운드 뷰 카메라", videoUrl: "https://www.youtube.com/embed/VDIwwgNt6aE?autoplay=1" },
      { image: deliveryrobot, title: "야외 배달 로봇", videoUrl: "https://www.youtube.com/embed/3f9qeT1YpgM?autoplay=1" },
      { image: GMSLcamera, title: "산업용 및 상업용 트럭용 서라운드 뷰 카메라", videoUrl: "https://www.youtube.com/embed/2C-kLV1yb8o?autoplay=1" }
    ],
    [
      { image: usb, title: "DMS용 USB 글로벌 셔터 카메라", videoUrl: "https://www.youtube.com/embed/bR4bHUT1Kck?autoplay=1" },
      { image: ip67, title: "IP69K 카메라 방수 및 방진 데모", videoUrl: "https://www.youtube.com/embed/xJtsouqanT0?autoplay=1" },
    ],
    [
      { image: RGBir, title: "엔비디아 젯슨 플랫폼용 5MP RGB-IR 글로벌 셔터 GMSL2 카메라", videoUrl: "https://www.youtube.com/embed/mKsKxKD6hk4?autoplay=1" },
      { image: DMSdemo, title: "DMS 및 OMS 데모: 실시간 운전자 감지, 졸음 및 승객 모니터링", videoUrl: "https://www.youtube.com/embed/IsNixJsmOrU?autoplay=1" },
    ]
  ];

  const flatCardData = allCardData.flat();

  const openLightbox = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <div className="VedioSection-container">
      <h2 className="VedioSection-title">비디오 보기</h2>
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
