import React from 'react';
import productbanner from "../../../../assets/Productpage/rearview/rearviewbanner.jpg";
// import AnimationButton from "../../ButtonComp/AnimationButton";
import "./Productbanner.css"
const ProductBanner = () => {
    return (
        <div className='ProductContainer'>
        {/* <div className="mainContainer"> */}
            <div className='ProductBanner'>
                <img src={productbanner} alt="banner" className="product-image" />
                {/* <div className='ProductBannerbtn'>
                    <AnimationButton text="Know more" backgroundColor="black" hoverColor="#00aeef"/>
                </div> */}
            </div>
        </div>
    // </div>
    );
}

export default ProductBanner;
