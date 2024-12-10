import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import DriverTab from "./ProductTabscomp/DriverTab"
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import DriverApplications from './ProductApplication/DriverApplications';

const Totalmonitoring = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <DriverTab/>
            <DriverApplications/>
            <Blog/>
            <ContactUs/>
        </div>
    );
}

export default Totalmonitoring;
