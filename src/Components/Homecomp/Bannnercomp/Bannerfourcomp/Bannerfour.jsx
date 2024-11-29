import React, { useState, useEffect, useRef } from 'react';
import './Bannerfour.css';
import energyrack from "../../../../assets/homepage/energyrack.png";
import energydrink from "../../../../assets/homepage/energydrink.png";
import pricinglight from "../../../../assets/homepage/pricinglight.png";
// import AnimationButton from "../../../ButtonComp/AnimationButton";
import responsive4 from "../../../../assets/homepage/Responsive4.png"
const Bannerfour = () => {
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
    <div style={{ backgroundColor: "#6978ba" }}>
      <div className='mainContainer'>
        <div ref={bannerRef} className="Bannerfour-container-unique">
          <div className="Bannerfour-left-unique">
            <div className="Bannerfour-image-row-unique">
              <img src={energyrack} className="Bannerfour-empty-unique" alt="Energy Rack" />
              <img
                src={energydrink}
                className={`Bannerfour-lowstocks-unique ${hasAnimated ? 'animate' : ''}`}
                alt="Energy Drink"
              />
              <img
                src={pricinglight}
                className={`Bannerfour-lightimg-unique ${hasAnimated ? 'animate' : ''}`}
                alt="Pricing Light"
              />
              <img
                src={responsive4} // Placeholder image
                className="Bannerfour-placeholder-unique" // Class for placeholder
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="Bannerfour-right-unique">
            <h2>Detect Pricing and <br />Labeling Discrepancies</h2>
            <div className="Bannerfour-spacer-unique"></div>
            <h5 className='stylish-font'>Inaccurate pricing and labeling can result in abandoned purchases, affecting up to 20% of customers in a single shopping trip.</h5>
            <h3>Accurate pricing is crucial for customer satisfaction and sales performance. SHELFVista provides clear images of shelf labels and price tags, helping retailers verify that pricing information is correctly displayed. By incorporating SHELFVista into broader pricing compliance systems, retailers can quickly detect and correct any discrepancies, ensuring promotions and prices are always up to date.</h3>
            <div className="Bannerfour-spacer-large-unique"></div>
            {/* <AnimationButton
              text="Know more"
              backgroundColor="#ffc107"
              textColor="#131b2d"
              hoverBackgroundColor="red"
              hoverTextColor="#344ea1"
              className="Bannerfour-button"
              to=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerfour;
