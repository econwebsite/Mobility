import React from "react";
import "./Specification.css";
import specimg from "../../../assets/homepage/specimg.png"
import AnimationButton from "../../ButtonComp/AnimationButton"
import Modelbutton from "../../ButtonComp/Modelbutton"

const Specification = () => {
  return (
   
<div className="spec-totcon">
<div className='mainContainer'>

    <div className="spec-container">
      <div className="spec-left">
        <img
          src={specimg}
          alt="Product"
          className="spec-image"
        />
      </div>

      <div className="spec-right">
        <h1 className="spec-title">Specifications</h1>

        <div className="spec-list">
          <div className="spec-item">
            <span className="spec-label">Connectivity</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">Wi-Fi <br></br> Dual Band 2.4 & 5 Ghz</span>

          </div>
          <div className="spec-item">
            <span className="spec-label">Camera</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">Resolution: 13MP (4208(H)x 3120(V))<br></br> Field of view: Covers up to 20 feet horizontally with 1 Shelf Camera</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Power</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">Rechargable Battery <br></br> USB Type C</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Dimensions</span>
            <span className="spec-colon">:</span>
            <span className="spec-value">74mm (L) *50mm (H) *25.70 (D)</span>
          </div>
        </div>
        <div className="spec-butt">
        <AnimationButton text="Learn more" to="/SHELFVista" backgroundColor="#f9cd47" textColor="#131b2d"  hoverTextColor="#344ea1" className="spec-button"  />
        <Modelbutton text="Download Tech document" backgroundColor="#f9cd47" textColor="#131b2d"  hoverTextColor="#344ea1" className="spec-button" to="" />

    </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Specification;
