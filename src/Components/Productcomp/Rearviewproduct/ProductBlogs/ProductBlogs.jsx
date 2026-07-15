import React from 'react';
import surroundview from "../../../../assets/Productpage/rearview/surroundview-left-blog.jpg";
import forwardfacing from "../../../../assets/Productpage/rearview/forwardfacing-blog.jpg";
import hdrblog from "../../../../assets/Productpage/rearview/hdr-led-blog.jpg";
import drivermonitoring from "../../../../assets/Productpage/rearview/drivermonitoring-blog.jpg";

import AnimationButton from "../../../ButtonComp/AnimationButton";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogProductPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='blogproduct'>
        <div className='mainContainer'>
          <h1>Related Blogs</h1>
          <div className="blogproduct-blog">
            <div className="blogproduct-column blogproduct-left">
              <div className="blogproduct-border-box">
              <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
                <img src={surroundview} alt="How do Surround View cameras improve driving" />
                </Link>
                <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>

                <h2>How do Surround View cameras improve driving and parking safety</h2>
          </Link>
                <p>Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
                <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white"  to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" className="blogproduct-btn" />
              </div>
            </div>
            <div className="blogproduct-column blogproduct-right">
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>

                    <img src={forwardfacing} alt="Forward-Facing Camera Work" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white"  to="/blog/how-forward-facing-camera-works-in-adas/" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
                    <img src={drivermonitoring} alt="driver monitoring cameras improve driving safety" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>How driver monitoring cameras improve driving safety and their key features</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white"  to="/blog/how-driver-monitoring-cameras-improve-safety-features/" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>

                    <img src={hdrblog} alt="HDR and LED Flicker Mitigation" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white"  to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogProductPage;