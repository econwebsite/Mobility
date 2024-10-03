import React from 'react';
import './BlogHubpage.css';
import AnimatedButton from "../../ButtonComp/AnimationButton";
import { Link } from 'react-router-dom';

const BlogHubpage = () => {
  return (
    <div className="BlogHubPage-Total mt-2">
      <h1 className="BlogHubPage-title">BLOG</h1>
      <div className='BlogHubPage-cards'>

        {/* Card 1 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <img src="https://placehold.jp/281x410.png" alt="Forward-facing camera" className="BlogHubPage-card-image" />
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/blogs/choosing-best-dental-intraoral-camera">
                <h2 className="BlogHubPage-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
              </Link>
              <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-best-dental-intraoral-camera" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <img src="https://placehold.jp/281x410.png" alt="HDR camera" className="BlogHubPage-card-image" />
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology">
                <h2 className="BlogHubPage-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
              </Link>
              <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/three-important-parameters-in-intraoral-camera-technology" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <img src="https://placehold.jp/281x410.png" alt="Card 3" className="BlogHubPage-card-image" />
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/blogs/three-dental-cameras-every-dentist-should-consider">
                <h2 className="BlogHubPage-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
              </Link>
              <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/three-dental-cameras-every-dentist-should-consider" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <img src="https://placehold.jp/281x410.png" alt="Card 4" className="BlogHubPage-card-image" />
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/blogs/choosing-right-intraoral-camera">
                <h2 className="BlogHubPage-card-title">How do Surround View cameras improve driving and parking safety</h2>
              </Link>
              <p className="BlogHubPage-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-right-intraoral-camera" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogHubpage;
