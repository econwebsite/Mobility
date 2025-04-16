import React from 'react';
import productbanner from "../../../../assets/Productpage/surroundview/surroundview-banner.jpg";
import "./Productbanner.css"
const ProductBanner = () => {
    return (
        <div className='ProductContainer'>
            <div className='ProductBanner'>
                <img src={productbanner} alt="Slide 1" className="product-image" />
               
            </div>
        </div>
    );
}

export default ProductBanner;
