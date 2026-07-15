import React, { useState } from "react";
import "./Blogcommon.css"
import { useNavigate } from 'react-router-dom';
import AnimatedButton from "../ButtonComp/AnimationButton"
import BlogArtical from "./BlogArticals/BlogArtical"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import drivermonitoring from "../../assets/hubpage/Blogpage/drivermonitoring-blog.jpg";
import hdrblog from "../../assets/hubpage/Blogpage/hdr-led-blog.jpg";
import surroundview from "../../assets/hubpage/Blogpage/surroundview-blog.jpg";
import forwardbanner from "../../assets/blogpage/forwardfacing-banner.jpg"

// ── Video thumbnails – replace these imports with your actual asset paths ──
import RGBirthumb from "../../assets/homepage/5mp-rgb-ir-global-shutter-thumbnail.jpg";
import DMSdemothumb from "../../assets/homepage/driver-detection-demo-thumbnail.jpg";
// ─────────────────────────────────────────────
//  Inline styles – isolated to the video section
// ─────────────────────────────────────────────
const videoSectionStyles = {
  section: {
    width: "100%",
    backgroundColor: "#f5f8fa",
    padding: "48px 0",
    boxSizing: "border-box",
  },
  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
    fontWeight: 400,
    color: "#00aeef",
    marginBottom: "15px",
    textAlign: "center",
  },
  subheading: {
    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
    color: "#666",
    textAlign: "center",
    marginBottom: "36px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
    backgroundColor: "#000",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
  thumbnail: {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    display: "block",
    opacity: 0.82,
    transition: "opacity 0.25s ease",
  },
  playOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "16px",
  },
  playBtn: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,174,239,0.92)",
    border: "3px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 16px rgba(0,174,239,0.55)",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  },
  playTriangle: {
    width: 0,
    height: 0,
    borderTop: "9px solid transparent",
    borderBottom: "9px solid transparent",
    borderLeft: "16px solid #fff",
    marginLeft: "4px",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "clamp(0.75rem, 1.4vw, 0.9rem)",
    fontWeight: 600,
    textAlign: "center",
    textShadow: "0 1px 6px rgba(0,0,0,0.7)",
    lineHeight: 1.4,
    padding: "8px 12px",
  },
  // Modal
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.88)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "16px",
    boxSizing: "border-box",
  },
  modalBox: {
    position: "relative",
    width: "100%",
    maxWidth: "860px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
    backgroundColor: "#000",
  },
  iframeWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%", // 16:9
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
  closeBtn: {
    position: "absolute",
    top: "-40px",
    right: 0,
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
    lineHeight: 1,
    padding: "4px 8px",
  },
};

// ─────────────────────────────────────────────
//  Video data
// ─────────────────────────────────────────────
const videoRows = [
  [
    { image: RGBirthumb,  title: "5MP RGB-IR Global Shutter GMSL2 Camera for NVIDIA Jetson Platforms",                   videoUrl: "https://www.youtube.com/embed/mKsKxKD6hk4?autoplay=1" },
    { image: DMSdemothumb,title: "DMS & OMS Demo: Driver Detection, Drowsiness & Passenger Monitoring in Real Time",     videoUrl: "https://www.youtube.com/embed/IsNixJsmOrU?autoplay=1" },
  ],
];

// ─────────────────────────────────────────────
//  VideoSection component (self-contained)
// ─────────────────────────────────────────────
const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const allVideos = videoRows.flat();

  const closeModal = () => setActiveVideo(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <section style={videoSectionStyles.section}>
      <div style={videoSectionStyles.inner}>
        <h2 style={videoSectionStyles.heading}>Related Videos</h2>

        <div style={videoSectionStyles.grid}>
          {allVideos.map((video, idx) => (
            <div
              key={idx}
              style={{
                ...videoSectionStyles.card,
                transform: hoveredIdx === idx ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredIdx === idx
                  ? "0 10px 32px rgba(0,174,239,0.25)"
                  : "0 4px 18px rgba(0,0,0,0.10)",
              }}
              onClick={() => setActiveVideo(video)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
              onKeyDown={(e) => e.key === "Enter" && setActiveVideo(video)}
            >
              <img
                src={video.image}
                alt={video.title}
                style={{
                  ...videoSectionStyles.thumbnail,
                  opacity: hoveredIdx === idx ? 0.65 : 0.82,
                }}
              />
              <div style={videoSectionStyles.playOverlay}>
               
              </div>
               <p style={videoSectionStyles.cardTitle}>{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fancybox-style Modal ── */}
      {activeVideo && (
        <div
          style={videoSectionStyles.modalBackdrop}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div style={videoSectionStyles.modalBox}>
            <button
              style={videoSectionStyles.closeBtn}
              onClick={closeModal}
              aria-label="Close video"
            >
              &#x2715;
            </button>
            <div style={videoSectionStyles.iframeWrapper}>
              <iframe
                style={videoSectionStyles.iframe}
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
//  <VideoSection /> inserted before <BlogArtical />
// ─────────────────────────────────────────────
const ForwardBlog = () => {
  const navigate = useNavigate();

  const handleLiClick = (leftTab, rightTab) => {
    navigate('/forward-facing-cameras', {
      state: {
        hash: '#forwardTab',
        leftTab,
        rightTab
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>How Forward-Facing Cameras Power ADAS Applications</title>
        <meta name='description' content='Learn how forward-facing cameras enhance ADAS with real-time object detection, lane monitoring, and pedestrian avoidance for safer autonomous driving.' />
      </Helmet>
      <div className="Blogpage-cointainer">
        <div className='mainContainer'>
          <div className="content-Blog">
            <div className="Blog-left-column">
              <div className="blog-breadcrumb">
                <Link to="/">Home</Link> {' > '}
                <Link to="/blog">Blogs</Link>  {' > '}
                <Link style={{ color: "grey", cursor: "default" }}>How Does a Forward-Facing Camera Work</Link>
              </div>
              <h2>How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS?</h2>
              <p>By Suresh Madhu, March 22, 2025</p>

              <div className="blogborder-box">
                <div class="Blog-coverimg">
                  <img src={forwardbanner} alt="Blog Cover Image" />
                </div>
                <br></br>
                <p>Forward-facing cameras are the proverbial eyes of Advanced Driver Assistance Systems (ADAS). They collect real-time visual data from the vehicle's surroundings and monitor the road, contributing to the system's overall situational awareness. </p>
                <p>They capture key elements like lanes, vehicles, pedestrians, traffic signs, and obstacles, which the ADAS processes to assist in making real-time decisions. These decisions support various functions, such as lane-keeping, object detection, and collision avoidance. It contributes to the broader goal of autonomous mobility and empowers vehicles to operate with minimal human intervention.</p>
                <p>In this blog, you'll learn how forward-facing cameras work in ADAS and their top use cases.</p>
                <h3>How Does a Forward-Facing Camera Work in ADAS?</h3>
                <p>High-resolution forward-facing cameras with narrow-angle lenses provide zoomed-in views for vehicles to focus on distant objects. This helps detect pedestrians, vehicles, or obstacles from distances of 50-100 meters, where wide-angle lenses may miss crucial details. </p>
                <p>How does this work? The camera continuously captures images, which are processed in real time by the vehicle's onboard system. Algorithms then work to identify and differentiate between various obstacles, as machine learning models improve the accuracy of this process by relying on large amounts of training data. These models are designed to identify and categorize objects like vehicles, pedestrians, and cyclists, helping the system make better decisions while driving.</p>
                <p>Furthermore, in practical driving conditions, the imaging quality of application can be impacted by varying light levels throughout the day or interference from artificial lighting. To mitigate, HDR (High Dynamic Range) technology enables the camera to handle extreme light contrasts so that bright and shadowed areas are clearly captured. Moreover, flickering from LED streetlights or headlights often distort images. However, it can be overcome with LFM (LED Flicker Mitigation) technology, which reduces these distortions to ensure an uninterrupted feed.</p>
                <h3>ADAS-Based Use Cases of Forward-Facing Cameras</h3>
                <h3>Accurate traffic sign recognition</h3>
                <p>Forward-facing cameras help accurately identify traffic signs. They continuously capture real-time images of the road ahead so that the ADAS can detect and classify traffic signs using pattern recognition algorithms. Traffic Sign Recognition (TSR) systems rely on these cameras to read speed limits, stop signs and other regulatory signs.</p>
                <p>Once recognized, the information is conveyed to the driver through the dashboard or heads-up display. </p>
                <h3>Forward collision detection</h3>
                <p>Forward-facing cameras in ADAS systems capture high-resolution visuals of the road ahead to assess the distance between vehicles. They help identify potential collisions, backed by algorithms that estimate relative speed and object trajectory. This enables safety features, including adaptive cruise control and automatic emergency braking. So, drivers can receive timely warnings to react early or slow the vehicle when necessary.</p>
                <h3>Real-time lane monitoring</h3>
                <p>Forward-facing cameras detect lane markings on the road, helping the vehicle stay centered within the lane. Hence, if the ADAS identifies an unintentional lane departure, it can trigger an alert or adjust the steering to bring the vehicle back on track. Lane detection systems are useful in highway driving, where maintaining lane position is critical for safety. </p>
                <p>Real-time processing of the camera's visual input drives the system to respond quickly to any deviations from the lane, ensuring smoother driving.</p>
                <h3>Object/pedestrian detection and avoidance</h3>
                <p>Object detection systems analyze visual input from forward-facing cameras to identify vehicles, pedestrians, cyclists, and road obstacles. These cameras work in tandem with other sensors to form a multi-layered safety net. Therefore, the system can distinguish between moving and stationary objects and initiate corrective action like alerts, steering correction, or brake activation when a collision risk is identified.</p>
                <p>In urban environments, improved image recognition also empowers embedded vision systems to respond intelligently to pedestrian movements as well. </p>
                <h3>Vehicle detection in blind spots</h3>
                <p>In many ADAS setups, forward-facing cameras assist in detecting vehicles that may enter the vehicle's blind spots. Blind-spot monitoring relies on a combination of side-facing and forward-facing cameras to maintain a constant awareness of surrounding traffic. By integrating the camera's visual feed with radar data, the vehicle can identify cars approaching from the rear or side and notify the driver of potential collisions.</p>
                <p>It helps avoid accidents, particularly during lane changes or merging onto highways.</p>
                <h3>e-con Systems' Cameras for Autonomous Mobility</h3>
                <p>Since 2003, e-con Systems has been designing, developing, and manufacturing high-performance OEM cameras. We offer several cameras that can be integrated into ADAS and other autonomous mobility applications. They come with ideal features such as HDR, night vision, multi-camera synchronization capabilities, IP67/IP69K rating, and multiple interfaces, including GMSL.</p>
                <h3>Our camera solutions for mobility:</h3>
                <ul className="Blog-camlink">
                  <li onClick={() => handleLiClick('3MP GMSL2', 'STURDeCAM31')}><p>STURDeCAM31</p></li>
                  <li onClick={() => handleLiClick('3MP GMSL2', 'STURDeCAM34')}><p>STURDeCAM34</p></li>
                  <li onClick={() => handleLiClick('4K GMSL2', 'STURDeCAM84')}><p>STURDeCAM84</p></li>
                  <li onClick={() => handleLiClick('4K GMSL2', 'STURDeCAM88')}><p>STURDeCAM88</p></li>
                 <li><p>RouteCAM_CU22</p></li>
                </ul>
                <p>Our autonomous mobility vision expertise includes ISP tuning, optics integration, AI/ML development, mechanical design support, functional safety compliance with ISO standards, and more. We also have deep experience in NVIDIA, NXP, TI, Qualcomm, and FPGA platforms.</p>
                <p>Browse our <a href="https://www.e-consystems.com/camera-selector.asp"> Camera Selector Page</a>  to view e-con Systems' portfolio.</p>
              </div>
            </div>
            <div className="Blog-right-column">
              <div className="Blogrelated-articles">
                <p style={{ "font-weight": "bold" }}>Related Blogs</p>
                <hr />
                <div className="CardBlogs">
                  <Link className="cardImgLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
                    <img src={drivermonitoring} alt="driving safety and their key features" className="Cardrelated-image" /></Link>
                  <Link className="cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
                    <h2>How driver monitoring cameras improve driving safety and their key features</h2></Link>
                  <p>Driver monitoring cameras improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.</p>
                  <AnimatedButton className="Blogreadmore-1" text="Read more" backgroundColor="#00aeef"  hoverColor="#69ba2f" to="/blog/how-driver-monitoring-cameras-improve-safety-features/"></AnimatedButton>
                </div>
                <div className="CardBlogs" style={{ cursor: "pointer" }}>
                  <Link className="cardImgLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
                    <img src={hdrblog} alt="Forward-Facing Cameras in ADAS" className="Cardrelated-image" /></Link>
                  <Link className="cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
                    <h2>Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2></Link>
                  <p>Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward facing cameras in enhancing ADAS safety.</p>
                  <AnimatedButton className="Blogreadmore-1" text="Read more" backgroundColor="#00aeef"  hoverColor="#69ba2f" to='/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/' />
                </div>
                <div className="CardBlogs">
                  <Link className="cardImgLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
                    <img src={surroundview} alt="driving and parking safety" className="Cardrelated-image" /></Link>
                  <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
                    <h2>How do Surround View cameras improve driving and parking safety</h2>
                  </Link>
                  <p>Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
                  <AnimatedButton className="Blogreadmore-1" text="Read more" backgroundColor="#00aeef"  hoverColor="#69ba2f" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/"></AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── YouTube Video Section (added) ── */}
      <VideoSection />

      <div><BlogArtical /></div>
    </div>
  );
};

export default ForwardBlog;