import React from 'react';
import './Productblog.css'; 
import drivermonitoring from "../../../../assets/Productpage/drivermonitoring/drivermonitoring-left-blog.jpg";
import forwardfacing from "../../../../assets/Productpage/drivermonitoring/forwardfacing-blog.jpg";
import hdrblog from "../../../../assets/Productpage/drivermonitoring/hdr-led-blog.jpg";
import surroundview from "../../../../assets/Productpage/drivermonitoring/surroundview-blog.jpg";

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
              <Link className="cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
                <img src={drivermonitoring} alt="Image Description" />
                </Link>
                <Link className="cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>

                <h2>How driver monitoring cameras improve driving safety and their key features</h2>
          </Link>
                <p>Driver monitoring cameras improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.</p>
                <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" className="blogproduct-btn" />
              </div>
            </div>
            <div className="blogproduct-column blogproduct-right">
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>

                    <img src={forwardfacing} alt="Card Image 1" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/how-forward-facing-camera-works-in-adas/" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas//" style={{ textDecoration: "none" }}>

                    <img src={hdrblog} alt="Card Image 2" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
                    <img src={surroundview} alt="Card Image 2" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>How do Surround View cameras improve driving and parking safety</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" className="blogproduct-btn" />
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