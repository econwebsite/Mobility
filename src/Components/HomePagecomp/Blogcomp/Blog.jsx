import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import blogimg1 from "../../../assets/homepage/mobilityblog1.jpg";
import blogimg2 from "../../../assets/homepage/mobilityblog2.jpg";
import blogimg3 from "../../../assets/homepage/mobilityblog3.jpg";
import blogimg4 from "../../../assets/homepage/mobilityblog4.jpg";
import AnimationButton from "../../ButtonComp/AnimationButton"

const Blog = () => {
  return (
    <div className="ProductBlogs-Total">
      <h1 className="ProductBlogs-title">BLOGS</h1>
      <div className='mainContainer'>
        <div className="ProductBlogs-cards" data-aos="zoom-in-right" data-aos-duration="1000">
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
              <img src={blogimg1} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/ForwardBlog" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/HdrLedBlog" style={{ textDecoration: "none" }}>
              <img src={blogimg2} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/HdrLedBlog" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward facing cameras in enhancing ADAS safety.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/HdrLedBlog" className="Blog-readmore-btn" />
          </div>

          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/DrivermonBlog" style={{ textDecoration: "none" }}>
              <img src={blogimg3} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/DrivermonBlog" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
            </Link>
            <p className="ProductBlogs-card-text">Driver monitoring systems improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/DrivermonBlog" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/SurroundBlog" style={{ textDecoration: "none" }}>
              <img src={blogimg4} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/SurroundBlog" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How do Surround View cameras improve driving and parking safety</h2>
            </Link>
            <p className="ProductBlogs-card-text">Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/SurroundBlog" className="Blog-readmore-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
