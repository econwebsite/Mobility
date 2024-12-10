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
            <Link className="BlogHubPage-IMGLink" to="/ForwardBlog">
              <img src="https://placehold.jp/281x410.png" alt="Forward-facing camera" className="BlogHubPage-card-image" />
              </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/ForwardBlog">
                <h2 className="BlogHubPage-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
              </Link>
              <p className="BlogHubPage-card-text">Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/ForwardBlog" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
            <Link className="BlogHubPage-IMGLink" to="/HdrLedBlog">
              <img src="https://placehold.jp/281x410.png" alt="HDR camera" className="BlogHubPage-card-image" />
            </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/HdrLedBlog">
                <h2 className="BlogHubPage-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
              </Link>
              <p className="BlogHubPage-card-text">Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward facing cameras in enhancing ADAS safety.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/HdrLedBlog" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
            <Link className="BlogHubPage-IMGLink" to="/DrivermonBlog">
              <img src="https://placehold.jp/281x410.png" alt="Card 3" className="BlogHubPage-card-image" />
              </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/DrivermonBlog">
                <h2 className="BlogHubPage-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
              </Link>
              <p className="BlogHubPage-card-text">Driver monitoring systems improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.
              </p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/DrivermonBlog" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="BlogHubPage-card">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
            <Link className="BlogHubPage-IMGLink" to="/SurroundBlog">
              <img src="https://placehold.jp/281x410.png" alt="Card 4" className="BlogHubPage-card-image" />
              </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link className="BlogHubPage-cardTitleLink" to="/SurroundBlog">
                <h2 className="BlogHubPage-card-title">How do Surround View cameras improve driving and parking safety</h2>
              </Link>
              <p className="BlogHubPage-card-text">Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/SurroundBlog" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogHubpage;
