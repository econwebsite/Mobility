import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Forwardtab from "./ProductTabscomp/Forwardtab"
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import ForwardApplications from './ProductApplication/ForwardApplications';

const Totalforwardfacing = () => {
    return (
        <div>
            <ProductBanner/>
            <Whatisneed/>
            <Forwardtab/>
            <ForwardApplications/>
            <Blog/>
            <ContactUs/>
        </div>
    );
}

export default Totalforwardfacing;
