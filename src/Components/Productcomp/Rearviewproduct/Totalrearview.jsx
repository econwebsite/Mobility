import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import ProductBlog from "./ProductBlogs/ProductBlogs";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import DriverApplications from './ProductApplication/DriverApplications';
import Rearviewtab from './ProductTabscomp/Rearviewtab';
import { Helmet } from 'react-helmet-async';




const Totalmonitoring = () => {
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;

const divVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const div = ({ children, id }) => (
  isMobile ? (
    <div id={id} style={{ marginBottom: "1px" }}>{children}</div>
  ) : (
    <motion.div
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={divVariants}
        style={{ marginBottom: "1px",overflow:"hidden" }}
      >
      {children}
    </motion.div>
  )
);

  useEffect(() => {
    const scrollTodiv = () => {
      const hash = location.state?.hash || window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 100; 
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: isMobile ? 'auto' : 'smooth'
          });
        }
      }
      if (location.state?.shouldScroll) {
        window.history.replaceState({}, document.title);
      }
    };
    
    const timeout = setTimeout(scrollTodiv, isMobile ? 500 : 300);
    return () => clearTimeout(timeout);
  }, [location]);

    return (
        <div>
            <Helmet>
      <title>Rear View Cameras for ADAS & Mobility</title>
      <meta name='description' content='Industrial-grade rear view cameras with wide-angle visibility and high-resolution imaging for safe reversing, blind spot elimination, and surround view integration.' />
      </Helmet>
             <div id="top">
            <ProductBanner/>
            <Whatisneed/>
            <div  id="rearviewTab">
            <Rearviewtab />
            </div>
            </div>
            <div>
            <DriverApplications/>
            </div>
            <div>
            <ProductBlog/>
            </div>
            <div>
            <ContactUs/>
            </div>
        </div>
    );
}

export default Totalmonitoring;
