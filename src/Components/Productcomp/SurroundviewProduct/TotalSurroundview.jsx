import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Producttab from "./ProductTabscomp/Producttab"
import ProductApplications from "./ProductApplication/ProductApplications";
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import GetInTouch from "../../HomePagecomp/Getintouchcomp/Getintouch";

const TotalSurroundview = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <Producttab/>
            <ProductApplications/>
            <Blog/>
            <GetInTouch/>
        </div>
    );
}

export default TotalSurroundview;
