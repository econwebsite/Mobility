import React from 'react';
import { motion } from "framer-motion";

import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Producttab from "./ProductTabscomp/Producttab"
import ProductApplications from "./ProductApplication/ProductApplications";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import ProductBlogs from './ProductBlogs/ProductBlogs';


const isMobile = window.innerWidth <= 768; 

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Section = ({ children }) => (
  isMobile ? (
    <div style={{ marginBottom: "1px" }}>{children}</div> 
  ) : (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
      style={{ marginBottom: "1px" }}
    >
      {children}
    </motion.div>
  )
);


const TotalSurroundview = () => {
    return (
        <div>
                  <Section>
            <ProductBanner/>
            <Whatisneed/>
            <Producttab/>
            </Section>
            <Section>
            <ProductApplications/>
            </Section>
            <Section>
            <ProductBlogs/>
            </Section>
            <Section>
            <ContactUs/>
            </Section>
        </div>
    );
}

export default TotalSurroundview;
