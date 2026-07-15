import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Producttab from "./ProductTabscomp/Producttab"
import ProductApplications from "./ProductApplication/ProductApplications";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import ProductBlogs from './ProductBlogs/ProductBlogs';
import { Helmet } from 'react-helmet-async';
import KeyFeatures from './KeyFeatures/KeyFeatures';
import TechnicalSpecsTable from './AdcuSpec/AdcuSpec';


const TotalAdcu = () => {
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Section = ({ children, id }) => (
  isMobile ? (
    <div id={id} style={{ marginBottom: "1px" }}>{children}</div>
  ) : (
  <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ marginBottom: "1px",overflow:"hidden" }}
    >
      {children}
    </motion.div>
  )
);


useEffect(() => {
  const scrollToSection = () => {
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
  
  const timeout = setTimeout(scrollToSection, isMobile ? 500 : 300);
  return () => clearTimeout(timeout);
}, [location]);

    return (
        <div>
            <Helmet>
      <title>Autonomous Driving Control Unit (ADCU)</title>
      <meta name='description' content='e-con Systems’ Autonomous Driving Control Unit (ADCU) is a high-performance computing platform designed to serve as the central intelligence of autonomousdelivery robots, last mile shuttle service, self-driving trucks etc.' />
      </Helmet>
             <div id="top">
            <ProductBanner/>
                   <div style={{ minHeight: '100vh' }}> 
            <Whatisneed/></div>
           
            </div>
            <div>
              <KeyFeatures/>
            </div>
              <div>
              <TechnicalSpecsTable />
            </div>
            <div>
            <ProductApplications/>
            </div>
             <div  id="adcuTab" >
            <Producttab />
            </div>
            {/* <div>
            <ProductBlogs/>
            </div> */}
            <div>
            <ContactUs/>
            </div>
        </div>
    );
}

export default TotalAdcu;