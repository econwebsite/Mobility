import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import DriverApplications from './ProductApplication/DriverApplications';
import Rearviewtab from './ProductTabscomp/Rearviewtab';

const Totalmonitoring = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <Rearviewtab/>
            <DriverApplications/>
            <Blog/>
            <ContactUs/>
        </div>
    );
}

export default Totalmonitoring;
