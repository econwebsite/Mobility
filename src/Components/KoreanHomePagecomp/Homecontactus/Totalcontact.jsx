import React from "react";
import LocationsTabs from "./Locationpage/Locationtab";
import Newcontactus from "./Locationpage/NewContactus";
import "./Locationpage/NewContactus.css"; 

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-sections-container">
        <section className="locations-section">
          <h1 className='contact-page-heading'>Locations</h1>
          <LocationsTabs />
        </section>

        <section className="contact-form-section">
          <h1 className='contact-page-heading'>Contact Us</h1>
          <Newcontactus />
        </section>
      </div>
    </div>
  );
}