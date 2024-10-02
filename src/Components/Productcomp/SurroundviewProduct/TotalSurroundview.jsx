import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Producttab from "./ProductTabscomp/Producttab"
import ProductApplications from "./ProductApplication/ProductApplications";
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";

const TotalSurroundview = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <Producttab/>
            <ProductApplications/>
            <Blog/>
            <ContactUs/>
        </div>
    );
}

export default TotalSurroundview;
