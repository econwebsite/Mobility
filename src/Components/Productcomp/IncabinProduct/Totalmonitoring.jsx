import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import DriverTab from "../../Productcomp/IncabinProduct/ProductTabscomp/DriverTab"
import ProductBlog from "./ProductBlogs/ProductBlogs";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import DriverApplications from './ProductApplication/DriverApplications';
import { Helmet } from 'react-helmet-async';


const Totalmonitoring = () => {
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
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        style={{ marginBottom: "1px" }}
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
            const header = document.querySelector('header') || document.querySelector('.mobile-header');
            const headerHeight = header ? header.offsetHeight : 80;
            const yOffset = -headerHeight - 130;
  
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
            window.scrollTo({ top: y, behavior: isMobile ? 'auto' : 'smooth' });
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
                <title>Driver Monitoring Cameras with RGB-IR & NIR | In-Cabin Safety</title>
                <meta name='description' content='Enhance road safety with driver monitoring cameras featuring RGB-IR, global shutter, and NIR. Detect drowsiness or distraction for 24/7 in-cabin ADAS performance.' />
                </Helmet>
            <Section id="top">
            <ProductBanner/>
            <Whatisneed/>
            <div id="driverTab">
            <DriverTab/>
            </div>
            </Section>
            <Section>
            <DriverApplications/>
            </Section>
            <Section>
            <ProductBlog/>
            </Section>
            <Section>
            <ContactUs/>
            </Section>
        </div>
    );
}

export default Totalmonitoring;
