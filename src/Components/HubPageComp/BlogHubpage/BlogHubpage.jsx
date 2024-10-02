import React from 'react';
import './BlogHubpage.css';
import AnimatedButton from "../../ButtonComp/AnimationButton";
import { Link } from 'react-router-dom';

const BlogHubpage = () => {
  return (
    <div className="BlogHubPage-Total mt-2">
      <h1 className="BlogHubPage-title">Blogs</h1>
      <div className='mainContainer'>
      <div className='BlogHubPage-mainContainer'>
        <div className="BlogHubPage-cards" data-aos="zoom-in-right" data-aos-duration="1800">
          <div className="BlogHubPage-card" style={{ cursor: "pointer" }}>
            <Link className="BlogHubPage-cardImgLink" to="/blogs/choosing-best-dental-intraoral-camera" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/550x400.png" alt="AI-enabled point of care device" className="BlogHubPage-card-image" /></Link>
            <Link className="BlogHubPage-cardTitleLink" to="/blogs/choosing-best-dental-intraoral-camera" style={{ textDecoration: "none" }}>
              <h2 className="BlogHubPage-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2></Link>
            <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-best-dental-intraoral-camera" />
          </div>
          <div className="BlogHubPage-card" style={{ cursor: "pointer" }}>
            <Link className="BlogHubPage-cardImgLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/550x400.png" alt="AI-enabled point of care device" className="BlogHubPage-card-image" /></Link>
            <Link className="BlogHubPage-cardTitleLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology" style={{ textDecoration: "none" }}><h2 className="BlogHubPage-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2></Link>
            <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/three-important-parameters-in-intraoral-camera-technology" />
          </div>

          <div className="BlogHubPage-card" style={{ cursor: "pointer" }}>
            <Link className="BlogHubPage-cardImgLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/550x400.png" alt="AI-enabled point of care device" className="BlogHubPage-card-image" /></Link>
            <Link className="BlogHubPage-cardTitleLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{ textDecoration: "none" }}><h2 className="BlogHubPage-card-title">How driver monitoring cameras improve driving safety and their key features</h2></Link>
            <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" />
          </div>
          <div className="BlogHubPage-card" style={{ cursor: "pointer" }}>
            <Link className="BlogHubPage-cardImgLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/550x400.png" alt="AI-enabled point of care device" className="BlogHubPage-card-image" /></Link>
            <Link className="BlogHubPage-cardTitleLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{ textDecoration: "none" }}><h2 className="BlogHubPage-card-title">How do Surround View cameras improve driving and parking safety</h2></Link>
            <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogHubpage;
