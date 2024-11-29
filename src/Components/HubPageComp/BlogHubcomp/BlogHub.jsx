import React from 'react';
import './BlogHub.css'; 
import AnimatedButton from "../../ButtonComp/AnimationButton";
import visionbased from "../../../assets/bloghubpage/visionbased.jpg"
import shefldigital from "../../../assets/bloghubpage/shelfdigitalization.jpg"
import pricinglabel from "../../../assets/bloghubpage/pricing&labeling.jpg"
import outofstocks from "../../../assets/bloghubpage/outofstocks.jpg"
import planogram from "../../../assets/bloghubpage/planogramcomplainence.jpg"
import { Link } from 'react-router-dom';

const BlogHub = () => {
  return (
    <div className='casehubpage-hubtot-blog'>
      <h1>Blogs</h1>
      <div className='mainContainer'>
      <div className="casehubpage-hubpageblog">
        <div className="casehubpage-hubblog-column left" data-aos="zoom-in-right" data-aos-duration="1000">
          <div className="casehubpage-hubblog-border-box">
            <Link to="/PricingLabeling" style={{ textDecoration: "none" }}>
              <img src={pricinglabel} alt="Image Description" className='pricingandlael' />
            </Link>
            <Link to="/PricingLabeling" style={{ textDecoration: "none" }}>
              <h2>What is the Role of Shelf Monitoring Cameras in Ensuring Pricing and Labeling Accuracy?</h2>
            </Link>
            <p>Shelf monitoring cameras help in maintaining price compliance in retail stores by automated price tag scanning and verification. In this blog, you’ll learn about the role of shelf monitoring cameras in pricing and labeling, and the key camera features required. </p>
            <p>Fusce faucibus, sem vel Fusce faucibus, sem velVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risusleo urna hendrerit risus.ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.</p>
            <AnimatedButton 
              className="casehubpage-read-more1" 
              text="Read more" 
                 textColor="#131b2d"
              backgroundColor="#f9cd47" 
              hoverTextColor="#344ea1"
              to="/PricingLabeling"
            />
          </div>
        </div>

        {/* Right four cards */}
        <div className="casehubpage-hubblog-column right" data-aos="zoom-in-left" data-aos-duration="1000">
          <div className="casehubpage-hubblog-card-row">
            <div className="casehubpage-hubblog-card">
              <Link to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
                <img src={shefldigital} alt="Card Image 1" />
              </Link>
              <Link to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
              <h6>What are the Latest Shelf Digitalization Technologies For Retailers?</h6>
              </Link>
              <p>Explore various shelf digitalization technologies, their unique benefits, implementation challenges, and how they're transforming traditional retail operations.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#f9cd47" 
                hoverTextColor="#344ea1"
                   textColor="#131b2d"
                to="/ShelfDigitalization"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/Outofstocks" style={{ textDecoration: "none" }}>
                <img src={outofstocks} alt="Card Image 2" />
              </Link>
              <Link to="/Outofstocks" style={{ textDecoration: "none" }}>
              <h6>How Shelf Monitoring Cameras Tackle the Retail Out-of-Stock Problem</h6>
              </Link>
              <p>Tracking the availability of store products and knowing when products go out-of-stock is critical in retail.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#f9cd47"
                textColor="#131b2d" 
                hoverTextColor="#344ea1"
                to="/Outofstocks"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/RetailExperience" style={{ textDecoration: "none" }}>
                <img src={visionbased} alt="Card Image 3" />
              </Link>
              <Link to="/RetailExperience" style={{ textDecoration: "none" }}>
              <h6>How vision-based shelf monitoring helps retailers</h6>
              </Link>
              <p>The shelves in retail stores are packed with thousands of unique Consumer Packaged Goods (CPG).</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#f9cd47" 
                   textColor="#131b2d"
                hoverTextColor="#344ea1"
                to="/RetailExperience"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/PlanogramCompliance" style={{ textDecoration: "none" }}>
                <img src={planogram} alt="Card Image 4" />
              </Link>
              <Link to="/PlanogramCompliance" style={{ textDecoration: "none" }}>
              <h6>How Smart Shelf Monitoring Ensures Accurate Planogram Compliance</h6>
              </Link>
              <p>Planograms dictate the optimal placement of products on shelves to maximize visibility and sales...</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                   textColor="#131b2d"
                backgroundColor="#f9cd47" 
                hoverTextColor="#344ea1"
                to="/PlanogramCompliance"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogHub;
