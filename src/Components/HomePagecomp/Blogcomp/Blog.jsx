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
            <Link className="cardImgLink" to="/Blog1" style={{ textDecoration: "none" }}>
              <img src={blogimg1} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/Blog1" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/Blog1" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/Blog2" style={{ textDecoration: "none" }}>
              <img src={blogimg2} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/Blog2" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/Blog2" className="Blog-readmore-btn" />
          </div>

          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/Blog3" style={{ textDecoration: "none" }}>
              <img src={blogimg3} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/Blog3" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
            </Link>
            <p className="ProductBlogs-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/Blog3" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/Blog4" style={{ textDecoration: "none" }}>
              <img src={blogimg4} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/Blog4" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How do Surround View cameras improve driving and parking safety</h2>
            </Link>
            <p className="ProductBlogs-card-text">The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/Blog4" className="Blog-readmore-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
