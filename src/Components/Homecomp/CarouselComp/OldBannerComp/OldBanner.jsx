import React from 'react';
import './OldBanner.css';
import productsize from "../../../../assets/homepage/productsize.png";
import Animation from ".././../../ButtonComp/AnimationButton"

const OldBanner = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
      <div className="mainContainer" >
        <div className="OldBanner-bannerContainer">
          <div className="OldBanner-bannerLeft">
            <img src={productsize} className="OldBanner-singleImg" alt="Banner" />
            <img
              src="https://placehold.co/600x400"
              className="OldBanner-placeholderImg"
              alt="Placeholder"
            />
          </div>
          <div className="OldBanner-bannerRight">
            <h3>Precision Shelf Management Meets Advanced Imaging</h3>
            <div className="OldBanner-spacer"></div>
            <h2>
            Provides pixel-perfect visibility of shelf conditions with 13 MP resolutions and wide shelf coverage
            </h2>
            <div className="OldBanner-spacerLarge"></div>
            {/* <button className="OldBanner-bannerButton">Know More</button> */}
            <Animation
              text="Know more"
              backgroundColor="#f9cd47"
              textColor="#131b2d"
              to="/SHELFVista"
              hoverTextColor="#344ea1"
              className="NewBanner-bannerButton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldBanner;
