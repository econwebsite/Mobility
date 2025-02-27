import React from 'react';
import './Homebanner.css';
import banner from '../../../assets/homepage/home-banner.jpg';
import AnimationButton from "../../ButtonComp/AnimationButton"
const Homebanner = () => {
    return (
        <div className='carouselContainer'>
            {/* <div className="mainContainer"> */}
                <div className='homeBanner'>
                    <img src={banner} alt="Slide 1" className="homecarousel-image" />
                    {/* <div className='homeButton'>
                        <AnimationButton text="Know more" backgroundColor="#00aeef" to="/product" animationColor="#69ba2f"/>
                    </div> */}
                </div>
            </div>
        // </div>
    );
};

export default Homebanner;
