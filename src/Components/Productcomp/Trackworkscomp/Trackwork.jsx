import React from 'react';
import './Trackwork.css';
// import shelftrack1 from ".././../../assets/productpage/shelftrack1.png"
// import shelftrack2 from ".././../../assets/productpage/shelftrack2.png"
// import shelftrack3 from ".././../../assets/productpage/shelftrack3.png"
import howshelf from "../../../assets/productpage/howshelfworks.png"

const Trackwork = () => {
  return (
    <div className="Trackwork-main-container">
      <div className="mainContainer">
      <h1 className="Trackwork-main-title">How SHELFVista Works</h1>

      <h2 className="Trackwork-subtitle">SHELFVista operates seamlessly to keep your business running smoothly</h2>

      <div className="Trackwork-blue-box">
        <div className="Trackwork-image-container">
          {/* <img src={shelftrack1} alt="Image 1" className="Trackwork-img1" data-aos="fade-right" data-aos-duration="1300"/>
          <img src={shelftrack2} alt="Image 2" className="Trackwork-img2" data-aos="zoom-in" data-aos-duration="1300" />
          <img src={shelftrack3} alt="Image 3" className="Trackwork-img3" data-aos="fade-left" data-aos-duration="1300"/> */}
          <img src={howshelf}></img>
        </div>
        <div className="Trackwork-aqua-box">
          <div className="Trackwork-border-box">
            <div className="Trackwork-box">
              <h3>1. Easy Configuration</h3>
              <p>Quickly set up your camera with e-con's app for Android and iOS, Configure server details, set image capture intervals, and use RTSP live preview for installation</p>
            </div>
            <div className="Trackwork-box">
              <h3>2. Image Capture </h3>
              <p>Once configured, the camera automatically captures high resolution images at your present intervals, ensuring seamless and reliable operation.</p>
            </div>
            <div className="Trackwork-box">
              <h3>3. Image Transfer</h3>
              <p>Captured images are wirelessly sent via Wi-Fi to backend system or cloud platform for storage, analysis, and retrieval</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Trackwork;
