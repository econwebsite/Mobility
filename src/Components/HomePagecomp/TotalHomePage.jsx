import React from 'react';
import Homebanner from "./Homebanner/Homebanner"
import Certification from './Certification/Certification';
import Manufacturing from "./Manufacturingcapablities/Manufacturing";
import Watchvedios from "./Watchvedioscomp/Vediosection";
import Casestudy from "./Casestudycomp/Casestudy";
import Blog from "./Blogcomp/Blog";
import ContactUs from "./Homecontactus/ContactUs";
import Paragraph from "./Paragraphcomp/Paragraph";
// import IndustriesComp from './Industriescomp/Industriescomp';
import OurProducts from './OurProductscomp/OurProduct';

const TotalHomePage = () => {
    return (
        <div>
            <Homebanner />
            <Paragraph />
            <OurProducts />
            {/* <IndustriesComp /> */}
            <Certification />
            <Manufacturing />
            <Watchvedios />
            <Casestudy />
            <Blog />
            <ContactUs />
        </div>
    );
}

export default TotalHomePage;
