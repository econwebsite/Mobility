import React from 'react';
import "./Hubcasecard.css";
import AnimatedButton from "../../ButtonComp/AnimationButton";
import { Link } from 'react-router-dom';

const Hubcasecard = () => {

  return (
    <div className="Hubcasecard-Total">
      <div className='Hubcasecard-mainContainer'>
        <div className="Hubcasecard-cards" data-aos="zoom-in-right" data-aos-duration="1000">

          <div className="Hubcasecard-card">
            <Link className="Hubcasecard-imgLink" to="/blogs/imaging-challenges-dental-loupes-manufacturing" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/259x156.png" alt="AI-enabled point of care device" className="Hubcasecard-image" />
            </Link>
            <Link className="Hubcasecard-titleLink" to="/blogs/imaging-challenges-dental-loupes-manufacturing" style={{ textDecoration: "none" }}>
              <h2 className="Hubcasecard-titleh2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </Link>
            <p className="Hubcasecard-text">Curabitur quis libero non urna commodo finibus non et justo. Phasellus consectetur gravida dui sit amet malesuada.</p>
            <AnimatedButton className="Hubcasecard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/imaging-challenges-dental-loupes-manufacturing"></AnimatedButton>
          </div>

          <div className="Hubcasecard-card">
            <Link className="Hubcasecard-imgLink" to="/blogs/extraoral-cameras-image-quality-tuning" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/259x156.png" alt="AI-enabled point of care device" className="Hubcasecard-image" />
            </Link>
            <Link className="Hubcasecard-titleLink" to="/blogs/extraoral-cameras-image-quality-tuning" style={{ textDecoration: "none" }}>
              <h2 className="Hubcasecard-titleh2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </Link>
            <p className="Hubcasecard-text">Curabitur quis libero non urna commodo finibus non et justo. Phasellus consectetur gravida dui sit amet malesuada.</p>
            <AnimatedButton className="Hubcasecard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/extraoral-cameras-image-quality-tuning"></AnimatedButton>
          </div>

          <div className="Hubcasecard-card">
            <Link className="Hubcasecard-imgLink" to="/blogs/understanding-extraoral-cameras-dentistry" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/259x156.png" alt="AI-enabled point of care device" className="Hubcasecard-image" />
            </Link>
            <Link className="Hubcasecard-titleLink" to="/blogs/understanding-extraoral-cameras-dentistry" style={{ textDecoration: "none" }}>
              <h2 className="Hubcasecard-titleh2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </Link>
            <p className="Hubcasecard-text">Curabitur quis libero non urna commodo finibus non et justo. Phasellus consectetur gravida dui sit amet malesuada.</p>
            <AnimatedButton className="Hubcasecard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/understanding-extraoral-cameras-dentistry"></AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hubcasecard;
