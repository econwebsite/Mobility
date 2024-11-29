import React, { useState, useEffect, useRef } from 'react';
import './Bannertwo.css';
import empty from "../../../../assets/homepage/empty.png";
import lowstocks from "../../../../assets/homepage/lowstocks.png";
import lightimg from "../../../../assets/homepage/lightimg.png";
// import AnimationButton from "../../../ButtonComp/AnimationButton";
import responsive2 from "../../../../assets/homepage/Responsive2.png"
const Bannertwo = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target); 
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
        <div ref={bannerRef} className="bannerTwo-container-unique">                   
          <div className="bannerTwo-left-unique">
            <div className="image-row-unique">
              <img src={empty} className="empty-unique" alt="Mobile" />
              <img
                src={lowstocks}
                className={`lowstocks-unique ${hasAnimated ? 'animate' : ''}`}
                alt="Rack"
              />
              <img
                src={lightimg}
                className={`lightimg-unique ${hasAnimated ? 'animate' : ''}`}
                alt="Rack"
              />
              <img
                src={responsive2}
                className="placeholder-unique2"
                alt="Placeholder"
                data-aos="fade-left" data-aos-duration="1200"
              />
            </div>
          </div>
          <div className="bannerTwo-right-unique">
            <h2>Reduced <br /> Out-of-Stock Issues</h2>
            <div className="spacer-unique"></div>
            <h5 className='stylish-font'>Overstocks and out-of-stocks across consumer product categories result in a global revenue loss of $1.1 trillion for retailers.</h5>
            <h3>Ensure your products are always available when customers need them. By utilizing SHELFVista, retailers can capture real-time shelf images that help identify out-of-stock situations. This allows retailers to act swiftly, reducing the chances of empty shelves and ensuring that stock levels are maintained to meet customer demand.</h3>
            <div className="spacer-large-unique"></div>
            {/* <AnimationButton 
              text="Know more" 
              backgroundColor="#ffc107" 
              textColor="#131b2d" 
              hoverBackgroundColor="red" 
              hoverTextColor="#344ea1" 
              className="bannerTwo-button-unique" 
              to="" 
            /> */}
          </div>
        </div>
        <div className="bannerTwo-bannerLine-container">
          {/* <div className="bannerTwo-bannerLine "></div> */}
        </div>
      </div>
    </div>
  );
};

export default Bannertwo;
