import React from 'react';
import './BlogHubpage.css';
import AnimatedButton from "../../ButtonComp/AnimationButton";
import { Link } from 'react-router-dom';
import { ReadOutlined  } from "@ant-design/icons";
import forwardfacing from "../../../assets/hubpage/forwardfacing-hubpage.jpg";
import hdrblog from "../../../assets/hubpage/hdr-led-hubpage.jpg";
import surroundview from "../../../assets/hubpage/surroundview-hubpage.jpg";
import drivermonitoring from "../../../assets/hubpage/drivermonitoring-hubpage.jpg"

const BlogHubpage = () => {
  return (
    <div className="BlogHubPage-Total">
      <h1 className="BlogHubPage-title">BLOG</h1>
      <div className="BlogHubPage-cards">

        {/* Card 1 */}
        <div className="BlogHubPage-card BlogHubdiv1">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-IMGLink" to="/blog/how-forward-facing-camera-works-in-adas">
                <img src={forwardfacing} alt="Forward-facing camera" className="BlogHubPage-card-image" />
              </Link>
              
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-cardTitleLink" to="/blog/how-forward-facing-camera-works-in-adas">
                <h2 className="BlogHubPage-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
              </Link>
              
              <p className="BlogHubPage-card-text">
                Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.
              <></>
              <div className="BlogHubPage-card-date">
  <ReadOutlined  className="BlogHubPage-calendar-icon" />
  <span>March 22, 2025</span>
</div>
              </p>
           

              
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blog/how-forward-facing-camera-works-in-adas" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="BlogHubPage-card BlogHubdiv3">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-IMGLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas">
                <img src={hdrblog} alt="HDR camera" className="BlogHubPage-card-image" />
              </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas">
                <h2 className="BlogHubPage-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
              </Link>
              <p className="BlogHubPage-card-text">
                Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward-facing cameras in enhancing ADAS safety.
                <></>
              <div className="BlogHubPage-card-date">
  <ReadOutlined  className="BlogHubPage-calendar-icon" />
  <span>March 31, 2025</span>
</div></p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="BlogHubPage-card BlogHubdiv9">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-IMGLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features">
                <img src={drivermonitoring} alt="Driver monitoring" className="BlogHubPage-card-image" />
              </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features">
                <h2 className="BlogHubPage-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
              </Link>
              <p className="BlogHubPage-card-text">
                Driver monitoring systems improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.
                <></>
              <div className="BlogHubPage-card-date">
  <ReadOutlined  className="BlogHubPage-calendar-icon" />
  <span>April 06, 2025</span>
</div> </p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blog/how-driver-monitoring-cameras-improve-safety-features" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="BlogHubPage-card BlogHubdiv10">
          <div className="BlogHubPage-card-content">
            <div className="BlogHubPage-card-image-container">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-IMGLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety">
                <img src={surroundview} alt="Surround view camera" className="BlogHubPage-card-image" />
              </Link>
            </div>
            <div className="BlogHubPage-card-text-content">
              <Link style={{textDecoration:"none"}} className="BlogHubPage-cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety">
                <h2 className="BlogHubPage-card-title">How do Surround View cameras improve driving and parking safety</h2>
              </Link>
              <p className="BlogHubPage-card-text">
                Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.
                <></>
              <div className="BlogHubPage-card-date">
  <ReadOutlined  className="BlogHubPage-calendar-icon" />
  <span>April 11, 2025</span>
</div> </p>
              <AnimatedButton className="BlogHubPage-card-button" text="Read more" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blog/how-surround-view-cameras-improve-driving-parking-safety" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogHubpage;
