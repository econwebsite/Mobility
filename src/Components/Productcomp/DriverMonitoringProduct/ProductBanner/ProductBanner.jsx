import React from 'react';
import productbanner from "../../../../assets/Productpage/drivermonitoring/drivermonitor-banner.jpg";
// import AnimationButton from "../../ButtonComp/AnimationButton";
import "./Productbanner.css"
const ProductBanner = () => {
    return (
        <div className='ProductContainer'>
        {/* <div className="mainContainer"> */}
            <div className='ProductBanner'>
                <img src={productbanner} alt="Slide 1" className="product-image" />
                {/* <div className='ProductBannerbtn'>
                    <AnimationButton text="Know more" backgroundColor="black" hoverColor="#00aeef" animationColor="#69ba2f"/>
                </div> */}
            </div>
        </div>
    // </div>
    );
}

export default ProductBanner;
