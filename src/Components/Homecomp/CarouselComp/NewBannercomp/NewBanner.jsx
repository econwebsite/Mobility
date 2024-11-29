import React from 'react';
import './NewBanner.css';
import newmobile from "../../../../assets/homepage/newhandimg.png";
import mobilerack from "../../../../assets/homepage/mobilerack.png";
import Animation from "../../../ButtonComp/AnimationButton";

const NewBanner = () => {
  return (
    <div style={{ backgroundColor: "#1050c1" }}>
      <div className="mainContainer">
        <div className="NewBanner-bannerContainer">
          <div className="NewBanner-bannerLeft">
            <div className="NewBanner-imageRow">
              {/* Desktop Images */}
              <img src={newmobile} className="NewBanner-mobileImg" alt="Mobile" />
              <img src={mobilerack} className="NewBanner-mobileRack" alt="Rack" />
              {/* Placeholder Image for Mobile */}
              <img
                src="https://placehold.co/600x400"
                className="NewBanner-placeholderImg"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="NewBanner-bannerRight">
            <h3>SHELFVista – Eyes on Every Shelf</h3>
            <div className="NewBanner-spacer"></div>
            <h2>
              Captures real-time shelf images, turning visibility into actionable insights for smarter retail management
            </h2>
            <div className="NewBanner-spacerLarge"></div>
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

export default NewBanner;
