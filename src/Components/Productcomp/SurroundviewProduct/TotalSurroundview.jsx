import React from 'react';
import { motion } from "framer-motion";

import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Producttab from "./ProductTabscomp/Producttab"
import ProductApplications from "./ProductApplication/ProductApplications";
import Blog from "../../HomePagecomp/Blogcomp/Blog";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";



const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const Section = ({ children }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
      style={{ marginBottom: "1px" }} 
    >
      {children}
    </motion.div>
  );


const TotalSurroundview = () => {
    return (
        <div>
                  <Section>
            <ProductBanner/>
            <Whatisneed/>
            </Section>
            <Section>
            <Producttab/>
            </Section>
            <Section>
            <ProductApplications/>
            </Section>
            <Section>
            <Blog/>
            </Section>
            <Section>
            <ContactUs/>
            </Section>
        </div>
    );
}

export default TotalSurroundview;
