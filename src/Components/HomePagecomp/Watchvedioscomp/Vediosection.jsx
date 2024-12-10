import React, { useState } from 'react';
import { Carousel } from 'antd';
import './vediosec.css';
import Cardthumb1 from "../../../assets/homepage/cardthumb1.jpg";
import Cardthumb2 from "../../../assets/homepage/cardthumb2.jpg";
import Cardthumb3 from "../../../assets/homepage/cardthumb3.jpg";
import FsLightbox from 'fslightbox-react';

const VedioSection = () => {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const allCardData = [
    [
      { image: Cardthumb2, title: "Cameras for ADAS", videoUrl: "https://www.youtube.com/embed/JDiIqmI9GRU?autoplay=1" },
      { image: Cardthumb1, title: "Cameras for Bird Eye View", videoUrl: "https://www.youtube.com/embed/iAdlvfHqxPg&t?autoplay=1" },
      { image: Cardthumb3, title: "Cameras for Cabin Monitoring", videoUrl: "https://www.youtube.com/embed/86WNBakriYg?autoplay=1" }
    ],
    [
      { image: Cardthumb1, title: "Cameras for Bird Eye View", videoUrl: "https://www.youtube.com/embed/amoin1rADKY&t?autoplay=1" },
      { image: Cardthumb2, title: "Cameras for ADAS", videoUrl: "https://www.youtube.com/embed/JDiIqmI9GRU?autoplay=1" },
      { image: Cardthumb3, title: "Cameras for Cabin Monitoring", videoUrl: "https://www.youtube.com/embed/86WNBakriYg?autoplay=1" }
    ],
    [
      { image: Cardthumb2, title: "Cameras for Bird Eye View", videoUrl: "https://www.youtube.com/embed/amoin1rADKY&t?autoplay=1" },
      { image: Cardthumb1, title: "Cameras for Bird Eye View", videoUrl: "https://www.youtube.com/embed/iAdlvfHqxPg&t?autoplay=1" },
      { image: Cardthumb3, title: "Cameras for Cabin Monitoring", videoUrl: "https://www.youtube.com/embed/86WNBakriYg?autoplay=1" }
    ],
    [
      { image: Cardthumb3, title: "Cameras for Cabin Monitoring", videoUrl: "https://www.youtube.com/embed/86WNBakriYg?autoplay=1" },
      { image: Cardthumb2, title: "Cameras for Bird Eye View", videoUrl: "https://www.youtube.com/embed/amoin1rADKY&t?autoplay=1" },
      { image: Cardthumb1, title: "Cameras for Cabin Monitoring", videoUrl: "https://www.youtube.com/embed/86WNBakriYg?autoplay=1" }
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
        {/* Carousel for Desktop */}
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

        {/* Card Grid for Mobile */}
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

        {/* Lightbox for displaying videos */}
        <FsLightbox
          toggler={lightboxToggler}
          sources={[currentVideo]}
        />
      </div>
    </div>
  );
};

export default VedioSection;
