import React, { useState } from "react";
import "./Blogcommon.css";
import { useNavigate } from 'react-router-dom';
import AnimatedButton from "../ButtonComp/AnimationButton"
import BlogArtical from "./BlogArticals/BlogArtical"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import forwardfacing from "../../assets/hubpage/Blogpage/forwardfacing-blog.jpg";
import hdrblog from "../../assets/hubpage/Blogpage/hdr-led-blog.jpg";
import surroundview from "../../assets/hubpage/Blogpage/surroundview-blog.jpg";
import driverbanner from '../../assets/blogpage/drivermonitoring-banner.jpg';
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
    { image: RGBirthumb,   title: "5MP RGB-IR Global Shutter GMSL2 Camera for NVIDIA Jetson Platforms",              videoUrl: "https://www.youtube.com/embed/mKsKxKD6hk4?autoplay=1" },
    { image: DMSdemothumb, title: "DMS & OMS Demo: Driver Detection, Drowsiness & Passenger Monitoring in Real Time", videoUrl: "https://www.youtube.com/embed/IsNixJsmOrU?autoplay=1" },
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

// ─────────────────────────────────────────────
//  Original component – unchanged except for
//  <VideoSection /> inserted before <BlogArtical />
// ─────────────────────────────────────────────
const DrivermonBlog = () => {
  const navigate = useNavigate();

  const handleLiClick = (leftTab, rightTab) => {
    navigate('/driver-monitoring-cameras', {
      state: {
        hash: '#driverTab',
        leftTab,
        rightTab
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>How Driver Monitoring Cameras Improve Safety</title>
        <meta name='description' content='Learn how driver monitoring cameras enhance safety through real-time tracking, object detection, HDR, and LED flicker mitigation in ADAS systems.' />
      </Helmet>
      <div className="Blogpage-cointainer">
        <div className='mainContainer'>
          <div className="content-Blog">
            <div className="Blog-left-column">
              <div className="blog-breadcrumb">
                <Link to="/">Home</Link> {' > '}
                <Link to="/blog">Blogs</Link>  {' > '}
                <Link style={{ color: "grey", cursor: "default" }}>How driver monitoring cameras improve driving safety</Link>
              </div>
              <h2>How driver monitoring cameras improve driving safety and their key features</h2>
              <p>By Suresh Madhu, April 06, 2025</p>

              <div className="blogborder-box">
                <div class="Blog-coverimg">
                  <img src={driverbanner} alt="Blog Cover Image" />
                </div>
                <br></br>
                <p>Driver monitoring cameras have become widely accepted as a force in improving road safety. They go a long way to address the risks associated with driver inattention and fatigue by helping continuously observe driver behavior. It means that signs of distraction or drowsiness can be easily detected. In turn, this triggers alerts or safety interventions, which can literally save lives.</p>
                <p>Undeniably, it has showcased a lot of potential in significantly lowering the risk of accidents by making sure that drivers can easily maintain focus.</p>
                <p>In this blog, you'll learn how driver monitoring cameras can greatly improve safety and the key camera features required to achieve this.</p>
                <h3>How Driver Monitoring Cameras Improve Safety</h3>
                <p>Simply put, driver monitoring cameras are used to detect and analyze driver behavior in real time. They help track various factors such as eye movements, facial expressions, and head positioning to assess the driver's focus. Backed by sensors and AI-based algorithms, the camera can quickly determine if a driver is becoming inattentive or drowsy.  Let's look at three ways that driver monitoring cameras improve driving safety:</p>
                <ul>
                  <li><p><b>Fatigue detection:</b> Long hours behind the wheel can lead to driver fatigue, one of the leading causes of road accidents. Driver monitoring cameras monitor indicators such as slow blinking, yawning, and prolonged eye closure to detect early signs of drowsiness. Once these signs are identified, the system can alert the driver and empower them to take a break or regain focus.</p></li>
                  <li><p><b>Distraction identification: </b>Distraction from mobile phones, infotainment systems, or external surroundings is another cause of accidents. Driver monitoring cameras can recognize when a driver is distracted by observing head position and eye movement. For example, if the driver is on the road for an extended period, the system can trigger warnings to encourage them to refocus on the road ahead.</p></li>
                  <li><p><b>Enhanced fleet safety:</b>For commercial fleets, driver monitoring cameras offer an extra security layer by monitoring drivers during long-haul trips. Fleet managers can, therefore, track driver behavior over time and identify risky patterns. It also helps provide targeted training or implement more structured breaks to prevent fatigue-related incidents. </p></li>
                  <li><p><b>Face recognition for driver identification: </b>Driver monitoring systems with face recognition capabilities help confirm the identity of the person behind the wheel. It prevents unauthorized use, supports driver-specific settings, and enables usage-based insights linked to individual driving patterns.</p></li>
                </ul>
                <h3>Camera Features That Increase Driving Safety</h3>
                <h3>Resolution and frame rate</h3>
                <p>A camera with high resolution and a fast frame rate can capture images with real-time accuracy. This can be crucial for detecting minute changes in driver behavior, such as eye movements or head tilts. For instance, a resolution of 2MP combined with a 60 frames per second (fps) recording capability ensures that even rapid movements are identified without motion blur. Thus, the driver monitoring system can perform reliable behavioral analysis and send the right alerts. </p>
                <h3>Global shutter</h3>
                <p>Global shutter mode captures entire frames simultaneously, eliminating the image warping or distortion often caused by the "rolling shutter" effect (commonplace in conventional cameras). It can be very useful when the driver or vehicle is in motion at high speeds, as the driver monitoring camera ensures that fast-moving objects or sudden changes in the driver's pod are captured without skewing. </p>
                <h3>NIR sensitivity</h3>
                <p>Near-Infrared (NIR) sensitivity at wavelengths such as 940 nm or 850 nm enables the camera to perform optimally in low-light or no-light conditions, such as night-time driving or tunnels. The driver monitoring camera can provide high-contrast images of the driver without the need for visible light, which could distract the driver. This makes sure that the system remains operational under all lighting conditions.</p>
                <h3>In-built ISP</h3>
                <p>An integrated Image Signal Processor (ISP) enhances image quality by dynamically adjusting parameters like exposure, contrast, and noise reduction based on the surrounding environment. The driver monitoring camera can cope with different lighting conditions (glare from headlights, shadows in the cabin, etc.). </p>
                <h3>GMSL2 or GigE interface</h3>
                <p>Using a GMSL2 (Gigabit Multimedia Serial Link) or GigE (Gigabit Ethernet) interface in driver monitoring cameras ensures high-speed data transmission. It results in real-time communication between the camera and the vehicle's processing unit. Both interfaces support high bandwidth for transmitting high-definition video streams without latency.</p>
                <h3>Form factor</h3>
                <p>The compact form factor of driver monitoring cameras enables seamless integration into a variety of vehicle cabins without affecting the aesthetic design or obstructing the driver's view. It enables flexible placement within the cabin, meaning the camera has an optimal angle to monitor the driver's movements without interfering. </p>
                <h3>RGB-IR</h3>
                <p>RGB-IR sensors combine standard RGB imaging with infrared capabilities in a single sensor unit. This setup enhances visibility in varied lighting environments by separating visible and infrared data streams. For driver monitoring, it improves eye and facial feature detection under both daylight and infrared illumination, reducing reliance on external lighting adjustments.</p>
                <h3>Inbuilt AI or AI at the host</h3>
                <p>Driver monitoring cameras can either come with onboard AI processing or rely on AI algorithms at the host system. Inbuilt AI handles tasks like gaze estimation or drowsiness detection directly on the camera, reducing latency. Alternatively, AI at the host enables deeper processing with greater computing power. Both configurations support scalable deployment depending on vehicle design and processing needs.</p>
                <h3>IP rating</h3>
                <p>Driver monitoring cameras with ratings such as IP67 or higher are built to manage tough environmental conditions like dust, moisture, and extreme temperature variations. Such ruggedized cameras are capable of withstanding harsh operational environments. It also eliminates the need for frequent maintenance while providing consistent performance across various driving settings. </p>
                <p>In indoor settings, an IP54 rating can offer adequate protection against limited dust ingress and water splashes, making it suitable for in-cabin driver monitoring systems.</p>
                <h3>Driver Monitoring Cameras Offered by e-con Systems </h3>
                <p>Since 2003, e-con Systems has been designing, developing, and manufacturing high-performance OEM cameras. We offer a wide selection of cameras for easy integration into driver monitoring systems. These small form-factor cameras are equipped with relevant features such as high resolution, high frame rate, NIR sensitivity, global shutter mode, as well as industry-leading protection ratings like IP67/IP69K. They also support various interfaces, including GMSL and GigE. </p>
                <p>Some of e-con Systems' cameras for driver monitoring systems are:</p>
                <ul className="Blog-camlink">
                   <li onClick={() => navigate('/driver-monitoring-cameras#All-cameras/STURDeCAM57')}><p>STURDeCAM57</p></li>
                  <li onClick={() => navigate('/driver-monitoring-cameras#All-cameras/eDACAM27')}><p>eDAC27</p></li>
                  <li onClick={() => navigate('/driver-monitoring-cameras#All-cameras/eDACAM29')}><p>eDAC29</p></li>
                </ul>
                <p>Our expertise in vision systems for autonomous mobility encompasses ISP tuning, optical integration, AI/ML development, mechanical design support, and compliance with ISO functional safety standards. e-con Systems also brings rich experience working with leading platforms such as NVIDIA, NXP, TI, Qualcomm, and FPGA.</p>
                <p>Go to our <a href="https://www.e-consystems.com/camera-selector.asp"> Camera Selector Page</a> to see our complete portfolio.</p>
              </div>
            </div>
            <div className="Blog-right-column">
              <div className="Blogrelated-articles">
                <p style={{ "font-weight": "bold" }}>Related Blogs</p>
                <hr />
                <div className="CardBlogs" style={{ cursor: "pointer" }}>
                  <Link className="cardImgLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
                    <img src={hdrblog} alt="Forward-Facing Cameras in ADAS" className="Cardrelated-image" /></Link>
                  <Link className="cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
                    <h2>Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2></Link>
                  <p>Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward facing cameras in enhancing ADAS safety.</p>
                  <AnimatedButton className="Blogreadmore-1" text="Read more" backgroundColor="#00aeef" hoverColor="#69ba2f" to='/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/' />
                </div>
                <div className="CardBlogs">
                  <Link className="cardImgLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>
                    <img src={forwardfacing} alt="Use Cases in ADAS" className="Cardrelated-image" /></Link>
                  <Link className="cardTitleLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>
                    <h2>How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2></Link>
                  <p>Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.</p>
                  <AnimatedButton className="Blogreadmore-1" text="Read more" backgroundColor="#00aeef" hoverColor="#69ba2f" to="/blog/how-forward-facing-camera-works-in-adas/"></AnimatedButton>
                </div>
                <div className="CardBlogs">
                  <Link className="cardImgLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
                    <img src={surroundview} alt="improve driving and parking safety" className="Cardrelated-image" /></Link>
                  <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
                    <h2>How do Surround View cameras improve driving and parking safety</h2>
                  </Link>
                  <p>Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
                  <AnimatedButton className="Blogreadmore-1" text="Read more" backgroundColor="#00aeef" hoverColor="#69ba2f" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/"></AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── YouTube Video Section ── */}
      <VideoSection />

      <div><BlogArtical /></div>
    </div>
  );
};

export default DrivermonBlog;