import React from "react";
import Slider from "react-slick";

import "./ProductPage.css";
import { FaCheck } from "react-icons/fa6";
import img1 from "../../../../assets/Productpage/see3CAM1.png";
import img2 from "../../../../assets/Productpage/see3cam2.png";
import img3 from "../../../../assets/Productpage/see3cam3.png";
import ProtoTabs from "../Testing2/ProtoTabs";
import HomeCard from "../HomeCard/HomeCard"


function ProductPage() {
  const highlights = [
    "HDR camera module based on Sony® ISX031 sensor incorporating sub-pixel technology",
    "Low-light 120dB HDR without Motion artifacts",
    "LED Flicker Mitigation (LFM)",
    "5:4 Aspect Ratio for Enhanced Vertical Coverage",
    "Automotive Temperature : -40°C to 85°C",
    "On-board high performance ISP",
  ];

  const images = [img1, img2, img3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <p style={{ margin: "0px" }}>{dots}</p>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#FF3B58",
        }}
      ></div>
    ),
  };

  return (
    <div className="ProductPage-container">
      {/* Header Section */}        <div className="mainContainer">

      <div className="ProductPage-header">
        <div className="ProductPage-breadcrumb">
          Home &gt; USB 3.1 Cameras &gt; 3MP Sony® ISX031 HDR Low light USB Camera
        </div>
        <br></br>
        <h1 className="ProductPage-title">
        STURDeCAM31_CUOAGX - 3MP Sony® ISX031 HDR Low Light USB Camera
        </h1>
      </div>

      <div className="ProductPage-main">
        <div className="ProductPage-carousel-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="ProductPage-carousel-slide">
                <img
                  src={img}
                  className="ProductPage-carousel-image"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="ProductPage-highlights">
          <h2 className="ProductPage-highlights-title">Highlights:</h2>
          <ul className="ProductPage-highlights-list">
            {highlights.map((item, index) => (
              <li key={index} className="ProductPage-highlights-item">
                <span className="ProductPage-tick" ><FaCheck color="#00aeef" size="1.5em" />
                </span> {item}
              </li>
            ))}
          </ul>

          <div className="ProductPage-pricing-container">
            <div className="ProductPage-pricing-text-row">
              <div className="ProductPage-price-label">Introductory Sample Price</div>
              <div className="ProductPage-price-label">Volume Price starts at</div>
            </div>

            <div className="ProductPage-pricing-price-row">
              <div className="ProductPage-price">USD 249</div>
              <div className="ProductPage-price">USD 99</div>
            </div>

            <div className="ProductPage-pricing-buttons">
              <button className="ProductPage-button buy-now">Buy Now</button>
              <button className="ProductPage-button document">Document</button>
            </div>

            <span className="ProductPage-shipping-note">
              Excluding Shipment Charges
            </span>
          </div>
        </div>
      </div>
      <br></br>
      <ProtoTabs/>
      <HomeCard/>
    </div>
    </div>
  );
}

export default ProductPage;
