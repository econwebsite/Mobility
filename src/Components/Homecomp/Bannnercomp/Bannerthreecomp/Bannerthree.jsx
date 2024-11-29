import React, { useState, useEffect, useRef } from 'react';
import './Bannerthree.css';
import missplacesmall from "../../../../assets/homepage/misplacesmall.png";
import misplacelarge from "../../../../assets/homepage/misplacelarge.png";
import planlight from "../../../../assets/homepage/planlight.png";
// import AnimationButton from "../../../ButtonComp/AnimationButton";
import responsive3 from "../../../../assets/homepage/Responsive3.png"
const Bannerthree = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target); // Stop observing after animation has been triggered
        }
      });
    }, { threshold: 0.1 });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div style={{ backgroundColor: "#3d5ba9" }}>
      <div className='mainContainer'>
        <div ref={bannerRef} className="Bannerthree-container">
          <div className="Bannerthree-left">
            <h2>Ensure Planogram <br /> Compliance</h2>
            <div className="Bannerthree-spacer"></div>
            <h5 className='stylish-font'>Planogram compliance boosts retail profits by 8.1%, but poor adherence leads to sales losses of $1M to $30M annually per retailer.</h5>
            <h3>Achieve planogram compliance by ensuring every product is correctly placed according to your merchandising strategy. With SHELFVista, you can capture high quality shelf images to verify that products are positioned accurately. This optimize shelf space for maximum utilization there be boosting sales and maximizing visiblity.</h3>
            <div className="Bannerthree-spacer-large"></div>
            {/* <AnimationButton 
              text="Know More" 
              backgroundColor="#ffc107" 
              textColor="#131b2d" 
              hoverBackgroundColor="red" 
              hoverTextColor="#344ea1" 
              className="Bannerthree-button" 
              to="" 
            /> */}
          </div>
          <div className="Bannerthree-right">
            <div className="Bannerthree-image-row">
              {/* Images that will be hidden on smaller screens */}
              <img src={planlight} className={`Bannerthree-planlight-animation ${hasAnimated ? 'animate' : ''}`} alt="Plan Light" />
              <img src={missplacesmall} className={`Bannerthree-missplacesmall-animation ${hasAnimated ? 'animate' : ''}`} alt="Missplace Small" />
              <img src={misplacelarge} className={`Bannerthree-misplacelarge-animation ${hasAnimated ? 'animate' : ''}`} alt="Misplace Large" />

              {/* Placeholder image for smaller screens */}
              <img src={responsive3} className="placeholder3" alt="Placeholder" />
            </div>
          </div>
        </div>
        <div className="HomeBanner-bannerLine-container">
          {/* <div className="HomeBanner-bannerLine"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Bannerthree;
