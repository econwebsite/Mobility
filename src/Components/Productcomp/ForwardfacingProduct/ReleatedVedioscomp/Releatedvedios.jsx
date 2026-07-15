import React, { useState } from 'react';
import { Carousel } from 'antd';
import './Releatedvedios.css';
import Pedestrian from "../../../../assets/homepage/obstacle-pedestrian-thumbnail.jpg";
import LaneDeparture from "../../../../assets/homepage/lane-keeping-assist-thumbnail.jpg";
import CollisionWarning from "../../../../assets/homepage/forward-collision-thumbnail.jpg";
import FsLightbox from 'fslightbox-react';

const ReleatedVideos = () => {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const allCardData = [
    [
      {
        image: Pedestrian,
        title: "Pedestrian & Obstacle avoidance system",
        videoUrl: "https://www.youtube.com/embed/20ih9JyCuu4?autoplay=1",
      },
      {
        image: LaneDeparture,
        title: "Lane Departure Warning / Lane Keeping Assist System",
        videoUrl: "https://www.youtube.com/embed/iih7ia04JXA?autoplay=1",
      },
      {
        image: CollisionWarning,
        title: "Forward Collision Warning System",
        videoUrl: "https://www.youtube.com/embed/pLdavMYVnRs?autoplay=1",
      },
    ],
  ];

  const flatCardData = allCardData.flat();

  const openLightbox = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <div className="Releated-Videos-container">
      <h2 className="Releated-Videos-title">Releated Videos</h2>
      <div className='mainContainer'>
        <div className="Releated-Videos-desktopView">
          <div autoplay>
            {allCardData.map((cardSet, index) => (
              <div key={index} className="Releated-Videos-carouselSlide">
                <div className="Releated-Videos-carouselCards">
                  {cardSet.map((card, idx) => (
                    <div
                      key={idx}
                      className="Releated-Videos-card"
                      onClick={() => openLightbox(card.videoUrl)}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="Releated-Videos-cardImage"
                      />
                      <h3 className="Releated-Videos-cardTitle">{card.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Releated-Videos-mobileView">
          <div className="Releated-Videos-mobileCardGrid">
            {flatCardData.map((card, index) => (
              <div
                key={index}
                className="Releated-Videos-mobileCard"
                onClick={() => openLightbox(card.videoUrl)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="Releated-Videos-cardImage"
                />
                <h3 className="Releated-Videos-cardTitle">{card.title}</h3>
              </div>
            ))}
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

export default ReleatedVideos;
