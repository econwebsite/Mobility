import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import './Homecard.css';
import { Link } from 'react-router-dom';
import chip from "../../../../assets/Productpage/see3CAM1.png";
import vegitable from "../../../../assets/Productpage/see3cam2.png";
import products from "../../../../assets/Productpage/see3cam3.png";

const HomeCardCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 678);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const cards = [
    { image: products, link: "", title: "How Shelf Monitoring Cameras Tackle the Retail Out-of-Stock Problem", text: "Tracking the availability of store products and knowing when products go out-of-stock is critical in retail." },
    { image: vegitable, link: "/RetailExperience", title: "How vision-based shelf monitoring helps retailers", text: "The shelves in retail stores are packed with thousands of unique Consumer Packaged Goods (CPG). Retail store owners must keep track..." },
    { image: chip, link: "/ShelfDigitalization", title: "What are the Latest Shelf Digitalization Technologies For Retailers?", text: "Explore various shelf digitalization technologies, their unique benefits, implementation challenges..." },
    { image: products, link: "/PlanogramCompliance", title: "How Smart Shelf Monitoring Ensures Accurate Planogram Compliance", text: "Planograms dictate the optimal placement of products on shelves to maximize visibility and sales..." },
    { image: chip, link: "/PricingLabeling", title: "What is the Role of Shelf Monitoring Cameras in Ensuring Pricing and Labeling Accuracy?", text: "Shelf monitoring cameras help in maintaining price compliance in retail stores by automated..." },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "20px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="home-card-section">
      <h2 className="blog-title">Releated Blogs</h2>
      <Slider {...sliderSettings} className="card-slider home-card-slider">
        {cards.map((card, index) => (
          <div key={index} className="UniqueProductBlogs-card">
            <Link to={card.link} style={{ textDecoration: "none" }}>
              <img src={card.image} alt={card.title} className="UniqueProductBlogs-card-image" />
              <h2 className="UniqueProductBlogs-card-title">{card.title}</h2>
            </Link>
            <p className="UniqueProductBlogs-card-text">{card.text}</p>
            <button className="home-readmore-btn">Read more</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCardCarousel;
