import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import forwardfacing from "../../../assets/homepage/forwardfacing-blog.jpg";
import hdrled from "../../../assets/homepage/hdr-led-blog.jpg";
import drivermonitoring from "../../../assets/homepage/drivermonitoring-blog.jpg";
import surroundview from "../../../assets/homepage/surroundview-blog.jpg";
import AnimationButton from "../../ButtonComp/AnimationButton"

const Blog = () => {
  return (
    <div className="ProductBlogs-Total">
      <h1 className="ProductBlogs-title">BLOGS</h1>
      <div className='mainContainer'>
        <div className="ProductBlogs-cards">
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/how-forward-facing-camera-works-in-adas" style={{ textDecoration: "none" }}>
              <img src={forwardfacing} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/how-forward-facing-camera-works-in-adas" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/how-forward-facing-camera-works-in-adas" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/why-hdr-lfm-matter-forward-facing-cameras-adas" style={{ textDecoration: "none" }}>
              <img src={hdrled} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/why-hdr-lfm-matter-forward-facing-cameras-adas" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward facing cameras in enhancing ADAS safety.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/why-hdr-lfm-matter-forward-facing-cameras-adas" className="Blog-readmore-btn" />
          </div>

          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/how-driver-monitoring-cameras-improve-safety-features" style={{ textDecoration: "none" }}>
              <img src={drivermonitoring} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/how-driver-monitoring-cameras-improve-safety-features" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
            </Link>
            <p className="ProductBlogs-card-text">Driver monitoring systems improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/how-driver-monitoring-cameras-improve-safety-features" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/how-surround-view-cameras-improve-driving-parking-safety" style={{ textDecoration: "none" }}>
              <img src={surroundview} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/how-surround-view-cameras-improve-driving-parking-safety" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How do Surround View cameras improve driving and parking safety</h2>
            </Link>
            <p className="ProductBlogs-card-text">Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/how-surround-view-cameras-improve-driving-parking-safety" className="Blog-readmore-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
