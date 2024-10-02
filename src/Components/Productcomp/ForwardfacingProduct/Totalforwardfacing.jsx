import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Forwardtab from "./ProductTabscomp/Forwardtab"
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import GetInTouch from "../../HomePagecomp/Getintouchcomp/Getintouch";
import ForwardApplications from './ProductApplication/ForwardApplications';

const Totalforwardfacing = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <Forwardtab/>
            <ForwardApplications/>
            <Blog/>
            <GetInTouch/>
        </div>
    );
}

export default Totalforwardfacing;
