import React from "react";
import { motion } from "framer-motion";
import Homebanner from "./Homebanner/Homebanner";
import Certification from "./Certification/Certification";
import Manufacturing from "./Manufacturingcapablities/Manufacturing";
import Watchvedios from "./Watchvedioscomp/Vediosection";
import Casestudy from "./Casestudycomp/Casestudy";
import Blog from "./Blogcomp/Blog";
import ContactUs from "./Homecontactus/ContactUs";
import Paragraph from "./Paragraphcomp/Paragraph";
import IndustriesComp from "./Industriescomp/Industriescomp";
import OurProducts from "./OurProductscomp/OurProduct";

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

const TotalHomePage = () => {
  return (
    <div>
      <Section>
        <Homebanner />
      </Section>
      <Section>
        <Paragraph />
      </Section>
      <Section>
        <OurProducts />
      </Section>
      <Section>
        <IndustriesComp />
      </Section>
      <Section>
        <Certification />
      </Section>
      <Section>
        <Manufacturing />
      </Section>
      <Section>
        <Watchvedios />
      </Section>
      <Section>
        <Casestudy />
      </Section>
      <Section>
        <Blog />
      </Section>
      <Section>
        <ContactUs />
      </Section>
    </div>
  );
};

export default TotalHomePage;
