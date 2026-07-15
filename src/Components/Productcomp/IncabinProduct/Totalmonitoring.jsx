import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import DriverTab from "./IncabinTabs/Incabin"
import ProductBlog from "./ProductBlogs/ProductBlogs";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import DriverApplications from './ProductApplication/DriverApplications';
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
                <title>Driver Monitoring Cameras with RGB-IR & NIR | In-Cabin Safety</title>
                <meta name='description' content='Enhance road safety with driver monitoring cameras featuring RGB-IR, global shutter, and NIR. Detect drowsiness or distraction for 24/7 in-cabin ADAS performance.' />
                </Helmet>
            <div id="top">
            <ProductBanner/>
            <Whatisneed/>
            <div  id="driverTab">
            <DriverTab/>
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
