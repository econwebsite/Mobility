import React from 'react';
import Homebanner from "./Homebanner/Homebanner"
import Cameramobility from "./CameraMobility/Cameramobility"
import Certification from './Certification/Certification';
import Manufacturing from "./Manufacturingcapablities/Manufacturing";
import Watchvedios from "./Watchvedioscomp/Vediosection";
import Casestudy from "./Casestudycomp/Casestudy";
import Blog from "./Blogcomp/Blog";
import Getintouch from "./Getintouchcomp/Getintouch";
import Paragraph from "./Paragraphcomp/Paragraph";

const TotalHomePage = () => {
    return (
        <div>
            <Homebanner/>
            <Paragraph/>
            <Cameramobility/>
            <Certification/>
            <Manufacturing/>
            <Watchvedios/>
            <Casestudy/>
            <Blog/>
            <Getintouch/>
        </div>
    );
}

export default TotalHomePage;
