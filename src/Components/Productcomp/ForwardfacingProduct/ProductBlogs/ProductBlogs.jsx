import React from 'react';
import './Productblog.css'; 
import surroundview from "../../../../assets/Productpage/mobilityblog1.jpg";
import forwardfacing from "../../../../assets/Productpage/mobilityblog2.jpg";
import rearview from "../../../../assets/Productpage/mobilityblog3.jpg";
import forwardhdr from "../../../../assets/Productpage/mobilityblog4.jpg";

import AnimationButton from "../../../ButtonComp/AnimationButton";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogProductPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='blogproduct'>
        <div className='mainContainer'>
          <h1>Related Blogs</h1>
          <div className="blogproduct-blog">
            <div className="blogproduct-column blogproduct-left" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="blogproduct-border-box">
              <Link className="cardTitleLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
                <img src={surroundview} alt="Image Description" />
                </Link>
                <Link className="cardTitleLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
                <h2>How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
          </Link>
                <p>Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.</p>
                <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/ForwardBlog" className="blogproduct-btn" />
              </div>
            </div>
            <div className="blogproduct-column blogproduct-right" data-aos="zoom-in-left" data-aos-duration="1000">
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/DrivermonBlog" style={{ textDecoration: "none" }}>

                    <img src={forwardfacing} alt="Card Image 1" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>How driver monitoring cameras improve driving safety and their key features</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/DrivermonBlog" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/HdrLedBlog" style={{ textDecoration: "none" }}>

                    <img src={rearview} alt="Card Image 2" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/HdrLedBlog" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
              <div className="blogproduct-card-row">
                <div className="blogproduct-card">
                  <div className="blogproduct-card-left">
                  <Link className="cardTitleLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
                    <img src={forwardhdr} alt="Card Image 2" />
                    </Link>
                  </div>
                  <div className="blogproduct-card-right">
                    <h6>How do Surround View cameras improve driving and parking safety</h6>
                    <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/surroundview" className="blogproduct-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogProductPage;