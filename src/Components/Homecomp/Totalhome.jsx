import React from 'react';
import HomeCard from "./HomeCard/HomeCard"
import HomeTabs from "./HomeTabs/HomeTabs"
import ShelfPara from './Homepara/ShelfPara';
import Whychoose from "./WhyChoose/Whychoose"
import Specification from './SpecificationComp/Specification';
import CarouselSlider from './CarouselComp/CarouselSlider';
import Homevideo from "./video comp/Homevideo"

const Totalhome = () => {
    return (
        <div>
            <CarouselSlider/>
            <ShelfPara/>
             <Homevideo/>
            <HomeTabs/>
            <Specification/>
            <Whychoose/>
            <br></br>
            <HomeCard/>
        </div>
    );
}

export default Totalhome;
