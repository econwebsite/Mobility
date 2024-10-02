import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import DriverTab from "./ProductTabscomp/DriverTab"
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import GetInTouch from "../../HomePagecomp/Getintouchcomp/Getintouch";
import DriverApplications from './ProductApplication/DriverApplications';

const Totalmonitoring = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <DriverTab/>
            <DriverApplications/>
            <Blog/>
            <GetInTouch/>
        </div>
    );
}

export default Totalmonitoring;
