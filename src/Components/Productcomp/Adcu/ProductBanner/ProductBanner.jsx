import React from 'react';
import productbanner from "../../../../assets/Productpage/adcu/adcu-banner.jpg";
import "./Productbanner.css"
const ProductBanner = () => {
    return (
        <div className='ProductContainer'>
            <div className='ProductBanner'>
                <img src={productbanner} alt="Slide 1" className="product-image" />
               
            </div>
            <p>e-con Systems’ Autonomous Driving Control Unit (ADCU) is a high-performance computing platform designed to serve as the central intelligence of autonomous delivery robots, last mile shuttle service, self-driving trucks etc. ADCU supports high-performance AI compute, multi-sensor connectivity, multiple interfaces and functional safety features into a rugged automotive-grade design. Designed with high-performance SoCs like NVIDIA Jetson Orin NX, our ADCU provides the computational power requiredfor perception, localization, and planning tasks - enabling driving autonomy up to Level 3 and beyond.</p>
        </div>
    );
}

export default ProductBanner;
