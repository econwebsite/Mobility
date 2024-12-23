import React from 'react';
import Homebanner from "./Homebanner/Homebanner"
import Cameramobility from "./CameraMobility/Cameramobility"
import Certification from './Certification/Certification';
import Manufacturing from "./Manufacturingcapablities/Manufacturing";
import Watchvedios from "./Watchvedioscomp/Vediosection";
import Casestudy from "./Casestudycomp/Casestudy";
import Blog from "./Blogcomp/Blog";
import ContactUs from "./Homecontactus/ContactUs";
import Paragraph from "./Paragraphcomp/Paragraph";
// import Testingcomp from '../Testingcomp';

const TotalHomePage = () => {
    return (
        <div>
            {/* <Testingcomp/> */}
            <Homebanner/>
            <Paragraph/>
            <Cameramobility/>
            <Certification/>
            <Manufacturing/>
            <Watchvedios/>
            <Casestudy/>
            <Blog/>
            <ContactUs/>
        </div>
    );
}

export default TotalHomePage;
